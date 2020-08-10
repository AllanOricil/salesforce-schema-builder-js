import Field from './field.js';
import TableHeader from './tableHeader.js';
import TableFooter from './tableFooter.js';
import Connection from './connection.js';

import {
    CanvasElement,
    Rectangle,
    Font
} from '@allanoricil/canvasjs';

export default class Table extends CanvasElement {
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
        this._font = font ? new Font(font) : Font.ARIAL;
        this._isDraggable = isDraggable || false;
        this._shape = new Rectangle({
            position: this._transform._position,
            dimension: this._transform._dimension,
            border,
            background
        });

        this._header = new TableHeader({
            title: label,
            font: font,
            icon: icon,
            parent: this,
            position: this._transform._position,
            dimension: {
                width: this._transform._dimension.width,
                height: 35
            },
            padding: header && header.padding ? header.padding : padding,
            background: header && header.background ? header.background : background,
            border: header && header.border ? header.border : border
        }, canvas);

        this._footer = new TableFooter({
            name: label,
            font: font,
            parent: this,
            position: {
                x: this._transform._position.x,
                y: this._transform._position.y + this._transform._dimension.height - 35
            },
            dimension: {
                width: this._transform._dimension.width,
                height: 35
            },
            padding: footer && footer.padding ? footer.padding : padding,
            background: footer && footer.background ? footer.background : background,
            border: footer && footer.border ? footer.border : border,
            shadow
        }, canvas);

        this._showScrollBar = false;
        this._scrollBarWidth = 10;
        this._scrollPosition = 0;
        this._scrollBarColor = 'rgba(0,0,0,0.2)';
        this._scrollBar = new Path2D();
        
        this.scrollableAreaWdith = this._shape._transform._dimension.width - 2 * this._padding._right;
        this.scrollableAreaX1Position = this._shape._transform._position.x + this._padding._left;
        this.scrollableAreaX2Position = this._shape._transform._position.x + this._padding._left + this.scrollableAreaWdith;
        this.scrollableAreaY1Position = this._shape._transform._position.y + this._header._transform._dimension.height + 10;
        this.scrollableAreaY2Position = this._shape._transform._position.y + this._shape._transform._dimension.height - this._footer._transform._dimension.height - 10;

        this._fields = [];
        for(let i = 0; fields && i < fields.length; i++){
            const field = fields[i];
            const fieldFont = field.font ? new Font(field.font) : Font.ARIAL;
            const fieldToInsert = new Field({
                label: field.label,
                name: field.name,
                parent: this,
                reference: field.reference,
                position: {
                    x: this.scrollableAreaX1Position,
                    y: this.scrollableAreaY1Position + fieldFont._dimensions.height * i
                },
                dimension: {
                    width: this.scrollableAreaWdith - this._scrollBarWidth,
                    height: fieldFont._dimensions.height
                },
                font: field.font,
                border: field.border,
                type: field.type,
                background: field.background,
                hoverBackground: field.hoverBackground,
                padding: field.padding,
                connectionStyles: field.connection,
                index: i
            }, canvas);
            this._fields.push(fieldToInsert);
        };

        this._connections = [];

        this.clipAreaHeight = this._shape._transform._dimension.height - this._header._transform._dimension.height - this._footer._transform._dimension.height - 20;
        this.scrollableAreaHeight = this._fields.length != 0 ? this._fields.length * this._fields[0]._font._dimensions.height : 0;
        this.hasScroolBar = this.scrollableAreaHeight > this.clipAreaHeight;
        this.scrollbarX1Position = this.scrollableAreaX2Position - this._scrollBarWidth;
        this.percentOfVisibleFields =  (this.clipAreaHeight / this._fields[0]._font._dimensions.height) / this._fields.length;
        this.scrollbarSize = parseInt(this.clipAreaHeight * this.percentOfVisibleFields).toFixed(2);
        this.initialFieldYPosition =  this.scrollableAreaY1Position;

        this.on('mousedown', () =>{
            if(this._scrollBarIsBeingHovered){
                this._scrollBarIsSelected = true;
            }else{
                this._canvas._canvasElementsManager.moveCanvasElementToLayer(this, 2);
                this._connections.forEach(connection => {
                    if(connection) connection.changeColorsAlpha(1);
                });

                this._fields.forEach(field => field.emit('mousedown'));
            }
        });

        this.on('click', ()=>{
            this._canvas._canvasElementsManager.moveCanvasElementToLayer(this, 2);
        });

        this.on('mousedrag', ({deltaX, deltaY}) => {
            this.position = {
                x: this._transform._position.x + deltaX,
                y: this._transform._position.y + deltaY,
            };
            this._calculateScrollbarProperties();
            this._header.emit('mousedrag', { deltaX, deltaY } );
            this._footer.emit('mousedrag', { deltaX, deltaY } );
            this._fields.forEach(field => field.emit('mousedrag', { deltaX, deltaY }));
            this.initialFieldYPosition = this.scrollableAreaY1Position;
            this._connections.forEach(connection => {
                connection.updatePath();
            });
        });

        this.on('mouseup', (e)=>{
            this._scrollBarIsSelected = false;
        });

        this.on('wheel', (e) => {
            if(this.hasScroolBar){
                const delta = Math.sign(e.deltaY);
                const canScrollDown = this.initialFieldYPosition + this.scrollableAreaHeight > this.scrollableAreaY2Position;
                const canScrollUp = this.initialFieldYPosition < this.scrollableAreaY1Position;
                if ((canScrollDown && delta > 0) || (canScrollUp && delta < 0)) { 
                    this._scrollPosition -= delta * 5;
                    this.initialFieldYPosition =  this.scrollableAreaY1Position + this._scrollPosition;
                    this._fields.forEach(field => field.emit('wheel', this.initialFieldYPosition));
                }
            }
        });

        this.on('mousemove', ({x, y}) => {
            this._fields.forEach(field => {
                field.emit('mousemove', {x, y});
            });

            if (this._canvas._ctx.isPointInPath(this._scrollBar, x, y, 'nonzero')) {
                this._scrollBarIsBeingHovered = true;
                this._scrollBarColor = 'rgba(0,0,0,0.3)';
            } else {
                this._scrollBarIsBeingHovered = false;
                this._scrollBarColor = 'rgba(0,0,0,0.2)';
            }
        });

        this.on('mouseenter', (e) => {
            this._showScrollBar = true;
        });

        this.on('mouseleave', (e) => {
            this._showScrollBar = false;
            this._scrollBarIsBeingHovered = false;
            this._fields.forEach(field => {
                field.emit('mouseleave');
            });

            this._connections.forEach(connection => {
                if(connection) connection.changeColorsAlpha(0.2);
            });
        });

        this.on('select', ()=>{
            this._selected = true;
        });

        this.on('deselect', ()=>{
            this._selected = false;
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
        ctx.rect(
            this.scrollableAreaX1Position,
            this.scrollableAreaY1Position,
            this.scrollableAreaWdith,
            this.clipAreaHeight
        );
        ctx.clip();

        this._fields.forEach((field) => {
            field.draw(ctx);
        });
        ctx.restore();

        //scrollbar
        if (this.hasScroolBar && this._showScrollBar) {
            ctx.save();
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.beginPath();
            ctx.rect(
                this.scrollbarX1Position,
                this.scrollableAreaY1Position,
                this._scrollBarWidth,
                this.clipAreaHeight
            );
            ctx.fill();

            ctx.fillStyle = this._scrollBarColor;
            ctx.beginPath();
            this._scrollBar = new Path2D();
            this._scrollBar.rect(
                this.scrollbarX1Position,
                this.scrollableAreaY1Position - this._scrollPosition * this.percentOfVisibleFields,
                this._scrollBarWidth,
                this.scrollbarSize
            );
            ctx.fill(this._scrollBar);
            ctx.restore();
        }

        this._footer.draw(ctx);

        if(this._selected){
            ctx.save();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgb(255,0,0)';
            ctx.strokeRect(this._transform._position.x, this._transform._position.y, this._transform._dimension.width, this._transform._dimension.height);
            ctx.restore();
        }
    }

    addField(field) {
        const fieldFont = field.font ? new Font(field.font) : Font.ARIAL;
        const fieldToInsert = new Field({
            label: field.label,
            name: field.name,
            parent: this,
            reference: field.reference,
            position: {
                x: this._transform._position.x,
                y: this._transform._position.y + fieldFont._dimensions.height * this._fields.length
            },
            dimension: {
                width: this.scrollableAreaWdith - this._scrollBarWidth,
                height: fieldFont._dimensions.height
            },
            font: fieldFont,
            border: field.border,
            padding: field.padding || { left: 15, top: 0, right: 0, bottom: 0},
            type: field.type,
            index: this._fields.length
        }, this._canvas);
        this._fields.push(fieldToInsert);
        if(field.reference) this.addConnectionToField(fieldToInsert, field.connection);
        this._calculateScrollbarProperties();
    }

    getFieldByName(fieldName){
        return this._fields.find(field => field._name === fieldName);
    }

    addConnectionToField(field, connection) {
        const referenceTable = this._canvas._canvasElementsManager.getCanvasElementByName(field._reference);
        if (referenceTable) {
            const connectionToInsert = {
                name: `${this._name}-${field.name}-${referenceTable._name}`,
                isEditable: false,
                connector: connection.connector,
                line: connection.line,
                to: field,
                from: referenceTable._header
            };
            const newConnection = new Connection(connectionToInsert, this._canvas);
            referenceTable._connections.push(newConnection);
            field.addConnection(newConnection);
            this._canvas._canvasElementsManager.addCanvasElement(newConnection);
        }
    }

    _calculateScrollbarProperties(){
        this.scrollableAreaWdith = this._shape._transform._dimension.width - 2 * this._padding._right;
        this.scrollableAreaX1Position = this._shape._transform._position.x + this._padding._left;
        this.scrollableAreaX2Position = this._shape._transform._position.x + this._padding._left + this.scrollableAreaWdith;
        this.scrollableAreaY1Position = this._shape._transform._position.y + this._header._transform._dimension.height + 10;
        this.scrollableAreaY2Position = this._shape._transform._position.y + this._shape._transform._dimension.height - this._footer._transform._dimension.height - 10;
        this.clipAreaHeight = this._shape._transform._dimension.height - this._header._transform._dimension.height - this._footer._transform._dimension.height - 20;
        this.scrollableAreaHeight = this._fields.length * this._fields[0]._font._dimensions.height;
        this.hasScroolBar = this.scrollableAreaHeight > this.clipAreaHeight;
        this.scrollbarX1Position = this.scrollableAreaX2Position - this._scrollBarWidth;
        this.percentOfVisibleFields =  (this.clipAreaHeight / this._fields[0]._font._dimensions.height) / this._fields.length;
        this.scrollbarSize = parseInt(this.clipAreaHeight * this.percentOfVisibleFields).toFixed(2);
    }
    
}