import {
    CanvasElement,
    Font,
    Rectangle
} from '@allanoricil/canvasjs';

export default class Field extends CanvasElement{

    constructor({
        label,
        name,
        type,
        position,
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
        this._font = new Font(font);
        this._shape = new Rectangle({
            position: this._transform._position,
            dimension: this._transform._dimension,
            border: border
        });
        this._connection = undefined;
        this._parent = parent;
        this._reference = reference;
        this.typeWidth = canvas._ctx.measureText(this._type).width;
        this.fieldNameYPosition =  undefined;
        this.fieldTypeXPosition = this._shape._transform._position.x + this._shape._transform._dimension.width - this.typeWidth - this._padding._right;
        this._index = index;

        this._draw = 
                this._transform._position.y >= this._parent.scrollableAreaY1Position - 10 && 
                this._transform._position.y <= this._parent.scrollableAreaY2Position - 15;

        this.fieldNameYPosition = this._shape._transform._position.y + this._font._dimensions.height / 5;

        this._fontIndexYPosition = this._index * this._font._dimensions.height;

        this.on('wheel', (initialYPosition)=>{
            this.position = {
                x: this._parent.scrollableAreaX1Position,
                y: initialYPosition + this._fontIndexYPosition
            }; 

            this.fieldNameYPosition = this._shape._transform._position.y + this._font._dimensions.height / 5;

            this._draw = 
                this._transform._position.y >= this._parent.scrollableAreaY1Position - 10 && 
                this._transform._position.y <= this._parent.scrollableAreaY2Position - 15;

            this.setConnectionPoints();
            
            if(this._connection) this._connection.emit('update');
        });

        this.on('mousedrag', ({x, y})=>{
            this.position = {
                x: this._transform._position.x + x,
                y: this._transform._position.y + y
            };

            this.fieldNameYPosition+=y;
            this.fieldTypeXPosition+=x;

            if(this._connection) this._connection.emit('update');
        });

        this.on('mousemove', ({x, y})=>{
            if(this._draw && this._reactToIoEvents){
                if (this.contains({x, y})) {
                    this._shape._background.color = '#f3f2f2';
                } else {
                    this._shape._background.color = 'white';
                }
            }
        });
    }

    draw(ctx){
        if(this._draw){
            ctx.save();
            this._shape.draw(ctx);
            ctx.font = this._font.font2Canvas;
            ctx.textBaseline = 'top';
            ctx.fillStyle = this._font._color.hex;
            ctx.fillText(
                this._label,
                this._shape._transform._position.x,
                this.fieldNameYPosition
            );
            ctx.fillText(
                this._type,
                this.fieldTypeXPosition - 15,
                this.fieldNameYPosition
            );
            ctx.restore();
        }
    }

    get connectionPoints(){
        const middleHeight = this._transform._dimension.height / 2;
        return {
            right: {
                x: this._parent._transform._position.x + this._parent._transform._dimension.width,
                y: this._transform._position.y + middleHeight
            },
            left: {
                x: this._parent._transform._position.x,
                y: this._transform._position.y + middleHeight
            },
        };
    }


    addConnection(connection){
        this._connection = connection;
        this.setConnectionPoints();
    }

    setConnectionPoints(){
        if (this._connection) {
            if (this._reference === this._parent._name) {
                if (this._draw) {
                    this._connection._from = this;
                } else {
                    this._connection._from = this._parent._header;
                }
            } else {
                if (this._draw) {
                    this._connection._to = this;
                } else {
                    this._connection._to = this._parent._footer;
                }
            }
        }
    }
}