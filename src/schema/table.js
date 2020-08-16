import Field from './field.js';
import TableHeader from './tableHeader.js';
import TableFooter from './tableFooter.js';
import Connection from './connection.js';

import {
    CanvasElement,
    Rectangle,
    Font,
    Border
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
        onSelectedBorder,
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
            background,
            shadow
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

        this._onSelectedBorder = new Border(onSelectedBorder);

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
        this.percentOfVisibleFields = this._fields.length != 0 ? ( (this.clipAreaHeight / this._fields[0]._font._dimensions.height) / this._fields.length ): 0;
        this.scrollbarSize = parseInt(this.clipAreaHeight * this.percentOfVisibleFields).toFixed(2);
        this.initialFieldYPosition =  this.scrollableAreaY1Position;
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

        ctx.font = this._fields.length ? this._fields[0]._font.font2Canvas : null;
        ctx.textBaseline = 'top';
        ctx.fillStyle = this._fields.length ? this._fields[0]._font._color.hex : null;
        for(let i = 0; i < this._fields.length; i++){
            const field = this._fields[i];
            if(field._draw) field.draw(ctx);
        }
        ctx.restore();

        //scrollbar
        if (this.hasScroolBar && this._showScrollBar) {
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.fillRect(
                this.scrollbarX1Position,
                this.scrollableAreaY1Position,
                this._scrollBarWidth,
                this.clipAreaHeight
            );

            ctx.fillStyle = this._scrollBarColor;
            this._scrollBar = new Path2D();
            this._scrollBar.rect(
                this.scrollbarX1Position,
                this.scrollableAreaY1Position - this._scrollPosition * this.percentOfVisibleFields,
                this._scrollBarWidth,
                this.scrollbarSize
            );
            ctx.fill(this._scrollBar);
        }

        this._footer.draw(ctx);

        if(this._selected){
            ctx.save();
            ctx.lineWidth = this._onSelectedBorder._lineWidth;
            ctx.strokeStyle = this._onSelectedBorder._color.rgba;
            var r = this._transform._position.x + this._transform._dimension.width;
            var b = this._transform._position.y + this._transform._dimension.height;
            ctx.beginPath();
            ctx.moveTo(this._transform._position.x + this._shape._border._radius, this._transform._position.y);
            ctx.lineTo(r - this._shape._border._radius, this._transform._position.y);
            ctx.quadraticCurveTo(r, this._transform._position.y, r, this._transform._position.y + this._shape._border._radius);
            ctx.lineTo(r, this._transform._position.y + this._transform._dimension.height - this._shape._border._radius);
            ctx.quadraticCurveTo(r, b, r - this._shape._border._radius, b);
            ctx.lineTo(this._transform._position.x + this._shape._border._radius, b);
            ctx.quadraticCurveTo(this._transform._position.x, b, this._transform._position.x, b - this._shape._border._radius);
            ctx.lineTo(this._transform._position.x, this._transform._position.y + this._shape._border._radius);
            ctx.quadraticCurveTo(this._transform._position.x, this._transform._position.y, this._transform._position.x + this._shape._border._radius, this._transform._position.y);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    }

    mouseDrag({deltaX, deltaY}){
        this.position = {
            x: this._transform._position.x + deltaX,
            y: this._transform._position.y + deltaY,
        };
        this._calculateScrollbarProperties();
        this._header.mousedrag({ deltaX, deltaY } );
        this._footer.mousedrag({ deltaX, deltaY } );
        for(let field of this._fields){
            if(field._draw) field.mousedrag({ deltaX, deltaY });
            if(field._connection) field._connection.updatePath();
        }
        this.initialFieldYPosition = this.scrollableAreaY1Position + deltaY;
        this._connections.forEach(connection => {
            connection.updatePath();
        });
    };

    mousedown(e){
        this._showScrollBar = true;
        this._selected = true;
        if(this._scrollBarIsBeingHovered){
            this._scrollBarIsSelected = true;
        }else{
            this._canvas._canvasElementsManager.moveCanvasElementToLayer(this, 2);
            this._connections.forEach(connection => {
                if(connection) connection.changeAlphaColor(1);
            });
            for(let field of this._fields){
                if(field._connection) {
                    field._connection.changeAlphaColor(1);
                }
            }
        }
    };

    mouseup(e){
        this._scrollBarIsSelected = false;
    };

    click(e){
        this._canvas._canvasElementsManager.moveCanvasElementToLayer(this, 2);
        for(let field of this._fields){
            if(field._draw) field.click(e);
        }
        this.emit('clicktable');
    };

    clickout(e){
        this._showScrollBar = false;
        this._scrollBarIsBeingHovered = false;
        this._canvas._canvasElementsManager.moveCanvasElementToLayer(this, 1);
        for(let field of this._fields){
            if(field._connection) field._connection.changeAlphaColor(0.2);
        }
        this._connections.forEach(connection => {
            if(connection) connection.changeAlphaColor(0.2);
        });
        this._selected = false;
    }

    dblclick(e){
        this._canvas._canvasElementsManager.moveCanvasElementToLayer(this, 2);
        this._drawAjustDimensionPoints = true;
        this.emit('dblclicktable');
    };

    wheel(e){
        if(this.hasScroolBar){
            const delta = Math.sign(e.deltaY);
            const canScrollDown = this.initialFieldYPosition + this.scrollableAreaHeight > this.scrollableAreaY2Position && delta > 0;
            const canScrollUp = this.initialFieldYPosition < this.scrollableAreaY1Position && delta < 0;
            if (canScrollDown || canScrollUp) { 
                this._scrollPosition -= delta * 5;
                this.initialFieldYPosition =  this.scrollableAreaY1Position + this._scrollPosition;
                for(let field of this._fields){
                    field.wheel(this.initialFieldYPosition);
                }
            }
        }
    };

    mousemove({x, y}){
        for(let field of this._fields){
            if(field._draw) field.mousemove({x, y});
        }

        if (this._canvas._ctx.isPointInPath(this._scrollBar, x, y, 'nonzero')) {
            this._scrollBarIsBeingHovered = true;
            this._scrollBarColor = 'rgba(0,0,0,0.3)';
        } else {
            this._scrollBarIsBeingHovered = false;
            this._scrollBarColor = 'rgba(0,0,0,0.2)';
        }
    };

    mouseenter(){
        this._showScrollBar = true;
    };

    mouseleave(){
        this._showScrollBar = false;
        this._scrollBarIsBeingHovered = false;
        for(let field of this._fields){
            if(field._draw) field.mouseleave();
        }
    };


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
        if(field.reference) this.addConnectionToField(fieldToInsert);
        this._calculateScrollbarProperties();
    }

    getFieldByName(fieldName){
        return this._fields.find(field => field._name === fieldName);
    }

    addConnectionToField(field) {
        const referenceTable = this._canvas._canvasElementsManager.getCanvasElementByName(field._reference);
        if (referenceTable) {
            const connectionToInsert = {
                name: `${this._name}-${field._name}-${referenceTable._name}`,
                isEditable: false,
                connector: field._connectionStyles.connector,
                line: field._connectionStyles.line,
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
        this.scrollableAreaHeight = this._fields.length != 0 ? this._fields.length * this._fields[0]._font._dimensions.height : 0;
        this.hasScroolBar = this.scrollableAreaHeight > this.clipAreaHeight;
        this.scrollbarX1Position = this.scrollableAreaX2Position - this._scrollBarWidth;
        this.percentOfVisibleFields =  this._fields.length != 0 ? ((this.clipAreaHeight / this._fields[0]._font._dimensions.height) / this._fields.length): 0;
        this.scrollbarSize = parseInt(this.clipAreaHeight * this.percentOfVisibleFields).toFixed(2);
    }
    
}