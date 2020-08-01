import Field from './field.js';
import TableHeader from './tableHeader.js';
import TableFooter from './tableFooter.js';
import Connection from './connection.js';

import {
    Entity,
    Rectangle,
    Font
}from '@allanoricil/canvasjs';

export default class Table extends Entity {
    constructor({
        name,
        label,
        icon,
        font,
        fields,
        position,
        dimension,
        isDraggable,
        background,
        shadow,
        border,
        header,
        footer,
        padding
    }, canvas) {
        super({
            name,
            position,
            dimension,
            padding
        }, canvas);
        this._z = 1;
        this._label = label;
        this._font = font ? new Font(font) : Font.FONT;
        this._isDraggable = isDraggable || false;
        this._shape = new Rectangle({
            position: this.position,
            dimension: this.dimension,
            border,
            background
        });

        this._header = new TableHeader({
            title: label,
            font: font,
            icon: icon,
            parent: this,
            position: this.position,
            dimension: { width: this.dimension.width, height: 35 },
            padding,
            border: header && header.border ? header.border : border
        }, canvas);

        this._footer = new TableFooter({
            name: label,
            font: font,
            parent: this,
            position: { x: this.position.x, y: this.position.y + this.dimension.height - 35 },
            dimension: { width: this.dimension.width, height: 35 },
            padding,
            border: footer && footer.border ? footer.border : border,
            shadow
        }, canvas);

        this._fields = [];
        let index = 0;
        fields.forEach(field => {
            const fieldFont = new Font(field.font);
            const fieldToInsert = new Field({
                label: field.label,
                name: field.name,
                parent: this,
                reference: field.reference,
                position: { 
                    x: this._shape.position.x, 
                    y: fieldFont.dimensions.height * index 
                },
                dimension: {
                    width: this._shape.dimension.width - 2 * this._padding.right - 10, 
                    height: fieldFont.dimensions.height
                },
                font: fieldFont,
                border: field.border,
                type: field.type
            }, canvas);
            this._fields.push(fieldToInsert);

            index++;
        });

        this._calculateScrollBarDimensions();
        this._showScrollBar = false;
        this._scrollPosition =  0;
        this._scrollBarColor = 'rgba(0,0,0,0.2)';
        this._scrollBar = new Path2D();

        this.on('wheel', (e) => {
            let mousePosition = this._canvas.getTransformedPoint(e.clientX, e.clientY);
            if(
                mousePosition.x >= this._shape.position.x + this._padding.left &&
                mousePosition.x <= this._shape.position.x + this._padding.left + this._shape.dimension.width - 2 * this._padding.right &&
                mousePosition.y >= this._shape.position.y + this._padding.top + 10 &&
                mousePosition.y <= this._shape.position.y + this._padding.top + this._shape.dimension.height - 10 - this._footer.dimension.height
            ){
                const delta = Math.sign(e.deltaY);
                const fieldsStartY = this._shape.position.y + this._padding.top + this._font.dimensions.height + 10 + this._scrollPosition;
                const cond1 = fieldsStartY + (this._fields.length * this._fields[0]._font.dimensions.height) > this._shape.position.y + this._padding.top + this._shape.dimension.height - 10 - this._footer.dimension.height;
                const cond2 = fieldsStartY < this._shape.position.y + this._padding.top + this._font.dimensions.height + 10;
                if((cond1 && delta > 0) || (cond2 && delta < 0)) this._scrollPosition-= delta * 5;
            }
        });

        this.on('mousemove', (e) => {
            let mousePosition = {x: e.offsetX, y: e.offsetY};
            this._fields.forEach(field =>{
                if(field.contains(mousePosition)){
                    field._shape.background.color = '#f3f2f2';
                }else{
                    field._shape.background.color = 'white';
                }
            });

            if(this._canvas.ctx.isPointInPath(this._scrollBar, mousePosition.x, mousePosition.y, 'nonzero')){
                this._scrollBarColor = 'rgba(0,0,0,0.3)';
            }else{
                this._scrollBarColor = 'rgba(0,0,0,0.2)';
            }
        });

        this.on('mousehover', (e) =>{
            this._showScrollBar = true;
        });

        this.on('mouseleave', (e) =>{
            this._showScrollBar = false;
        });
    }

    draw(ctx) {
        //shape
        this._shape.draw(ctx);

        //header
        this._header.draw(ctx);

        //scrollable area
        ctx.save();
        ctx.beginPath();
        const scrollableAreaYPosition = this.position.y + this._header.dimension.height + 10;
        const scrollableAreaY2Position = scrollableAreaYPosition + this._shape.dimension.height - this._padding.top - this._font.dimensions.height - 20;
        ctx.rect(
            this._shape.position.x + this._padding.left, 
            scrollableAreaYPosition,
            this._shape.dimension.width - 2 * this._padding.right,
            this._shape.dimension.height - this._padding.top - this._font.dimensions.height - 10 - this._footer.dimension.height
        );
        ctx.clip();
        
        this._fields.forEach((field, index) =>{
            const fieldYPosition = this._shape.position.y + this._padding.top + this._font.dimensions.height + 10 + field._font.dimensions.height * index + this._scrollPosition;
            field.position = {
                x: this._shape.position.x + this._padding.left,
                y: fieldYPosition
            };

            const isFieldOutsideOfScrollableArea = fieldYPosition < scrollableAreaYPosition - 15 || fieldYPosition > scrollableAreaY2Position - this._footer.dimension.height - 3;

            if(field._connection){
                if(field._reference !== this._name){
                    if(isFieldOutsideOfScrollableArea){
                        field._connection._to = this._header;
                    }else{
                        field._connection._to = field;
                    }
                }else{
                    if(isFieldOutsideOfScrollableArea){
                        field._connection._from = this._header;
                    }else{
                        field._connection._from = field;
                    }
                }
            }

            field.draw(ctx);
        });
        ctx.restore();

        //scrollbar
        if(this._hasScroolBar && this._showScrollBar){
            ctx.save();
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.beginPath();
            ctx.rect(
                this._shape.position.x + this._padding.left + this._shape.dimension.width - 2 * this._padding.right - 5,
                this._shape.position.y + this._padding.top + this._font.dimensions.height + 10,
                5,
                this._shape.dimension.height - this._padding.top - this._font.dimensions.height - 10 - this._footer.dimension.height
            );
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.fillStyle = this._scrollBarColor;
            ctx.beginPath();
            this._scrollBar = new Path2D();
            this._scrollBar.rect(
                this._shape.position.x + this._padding.left + this._shape.dimension.width - 2 * this._padding.right - 5,
                this._shape.position.y + this._padding.top + this._font.dimensions.height + 9.5 - this._scrollPosition * this._percentOfVisibleFields,
                5,
                this._scrollbarSize
            );
            ctx.fill(this._scrollBar);
            ctx.restore();
        }

        this._footer.draw(ctx);
    }

    addField(field){
        const fieldFont = new Font(field.font);
        const fieldToInsert = new Field({
            label: field.label,
            name: field.name,
            parent: this,
            reference: field.reference,
            position: { 
                x: this._shape.position.x, 
                y: fieldFont.dimensions.height * this._fields.length 
            },
            dimension: {
                width: this._shape.dimension.width - 2 * this._padding.right - 10, 
                height: fieldFont.dimensions.height
            },
            font: fieldFont,
            border: field.border,
            type: field.type
        }, this._canvas);
        this._fields.push(fieldToInsert);
        this.addConnectionToField(fieldToInsert);
        this._calculateScrollBarDimensions();
    }

    addConnectionToField(field){
        if(field._reference){
            const referenceTable = this._canvas.entityManager.getEntityByName(field._reference);
            if(referenceTable){
                const connection = {
                    name: `${this._name}-${field._name}-${referenceTable._name}`,
                    isEditable: false,
                    connector: {
                        shape: 'triangle',
                        dimension: {
                            width: 10,
                            height: 10
                        },
                        color: 'rgb(180,180,180)'
                    },
                    line: {
                        weight: 3,
                        color: 'rgb(180,180,180)',
                        enableBezierCurves: true
                    },
                    to: field,
                    from: referenceTable._header
                };

                if(this._name === field._reference){
                    connection.to = referenceTable._footer;
                    connection.from = field;
                }

                const newConnection = new Connection(connection);
                field._connection = newConnection;
                this._canvas.entityManager.addEntity(newConnection, this._canvas);
            }
        }
    }

    setIcon(){
        
    }

    _calculateScrollBarDimensions(){
        this._clipAreaHeight = this._shape.dimension.height - this._padding.top - this._font.dimensions.height - 10 - this._footer.dimension.height;
        this._scrollableAreaHeight = this._fields.length * this._fields[0]._font.dimensions.height;
        const numberOfVisibleFields = (this._clipAreaHeight / this._fields[0]._font.dimensions.height);
        this._percentOfVisibleFields = numberOfVisibleFields/this._fields.length;
        this._scrollbarSize = parseInt(this._clipAreaHeight * this._percentOfVisibleFields).toFixed(2);
        this._hasScroolBar = this._scrollableAreaHeight > this._clipAreaHeight;
    }
}