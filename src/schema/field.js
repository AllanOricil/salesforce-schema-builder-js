import {
    CanvasElement,
    Font,
    Rectangle,
    Background
} from '@allanoricil/canvasjs';

export default class Field extends CanvasElement{

    constructor({
        label,
        name,
        type,
        position,
        background,
        hoverBackground,
        connectionStyles,
        dimension,
        border,
        padding,
        font,
        reference,
        parent,
        index
    }, canvas){
        super({
            name,
            position,
            dimension,
            padding
        }, canvas);
        this._label = label;
        this._type = type || '';
        this._font = font instanceof Font ? font : new Font(font);
        this._shape = new Rectangle({
            position: this._transform._position,
            dimension: this._transform._dimension,
            background,
            border
        });
        this._backgroundColor = background ? new Background(background) : Background.TRANSPARENT;
        this._hoverBackground = hoverBackground ? new Background(hoverBackground) : Background.TRANSPARENT;
        this._connection = undefined;
        this._connectionStyles = connectionStyles;
        this._parent = parent;
        this._reference = reference;
        canvas._ctx.save();
        canvas._ctx.font = this._font.font2Canvas;
        this.typeWidth = canvas._ctx.measureText(this._type).width;
        canvas._ctx.restore();
        
        this.fieldNamePositionY = this._transform._position.y + this._font._dimensions.height / 5;
        this.fieldTypePositionX = this._transform._position.x + this._transform._dimension.width - this.typeWidth - this._padding._right - this._parent._scrollBarWidth;
        this._index = index;
        this._referentialYPosition = this._parent.scrollableAreaY1Position;
        this._fieldIndexYPosition = this._index * this._font._dimensions.height;

        this._draw = 
                this._transform._position.y >= this._parent.scrollableAreaY1Position - 10 && 
                this._transform._position.y <= this._parent.scrollableAreaY2Position - 15;
    }

    draw(ctx){
        this._shape.draw(ctx);
        ctx.font = this._font.font2Canvas;
        ctx.textBaseline = 'top';
        ctx.fillStyle = this._font._color.hex;
        this.typeWidth = ctx.measureText(this._type).width;
        ctx.fillText(
            this._label,
            this._transform._position.x,
            this.fieldNamePositionY
        );
        ctx.fillText(
            this._type,
            this.fieldTypePositionX,
            this.fieldNamePositionY
        );
    }

    click(e){
        this.emit('selectfield');
    };

    wheel(initialYPosition){
        this._referentialYPosition = initialYPosition;
        this.position = {
            x: this._parent.scrollableAreaX1Position,
            y: this._referentialYPosition + this._fieldIndexYPosition
        }; 

        this.fieldNamePositionY = this._transform._position.y + this._font._dimensions.height / 5;
        this.fieldTypePositionX = this._transform._position.x + this._transform._dimension.width - this.typeWidth - this._padding._right - this._parent._scrollBarWidth;

        this._draw = 
            this._transform._position.y >= this._parent.scrollableAreaY1Position - 10 && 
            this._transform._position.y <= this._parent.scrollableAreaY2Position - 15;

        this.setConnectionPoints();
        
        if(this._connection) this._connection.updatePath();
    };

    mousedrag({deltaX, deltaY}){
        this.position = {
            x: this._transform._position.x + deltaX,
            y: this._transform._position.y + deltaY
        };

        this.fieldNamePositionY += deltaY;
        this.fieldTypePositionX += deltaX;

        if(this._connection) this._connection.updatePath();
    };

    mousemove({x, y}){
        if (this.contains({x, y})) {
            this._shape._background.color = this._hoverBackground._color.rgba;
        } else {
            this._shape._background.color = this._backgroundColor._color.rgba;
        }
    };

    mouseleave(e){
        this._shape._background.color = this._backgroundColor._color.rgba;
    };

    get connectionPoints(){
        const middleHeight = this._transform._dimension.height / 2;
        return {
            right: {
                name: 'right',
                x: this._parent._transform._position.x + this._parent._transform._dimension.width,
                y: this._transform._position.y + middleHeight
            },
            left: {
                name: 'left',
                x: this._parent._transform._position.x,
                y: this._transform._position.y + middleHeight
            },
        };
    }

    addConnection(connection){
        this._connection = connection;
        this.setConnectionPoints();
        this._connection.updatePath();
    }

    setConnectionPoints(){
        if (this._connection) {
            if (this._draw) {
                this._connection._to = this;
            } else {
                this._connection._to = this._parent._footer;
            }
        }
    }

    setLabel(newLabel){
        this._label = newLabel;
    }
}