import {
    CanvasElement,
    Rectangle
} from '@allanoricil/canvasjs';

export default class TableFooter extends CanvasElement {
    constructor({
        name,
        position,
        dimension,
        background,
        shadow,
        border,
        padding,
        parent,
    }, canvas) {
        super({
            name: `footer_${name}`,
            position,
            dimension,
            padding,
            parent
        }, canvas);

        this._shape = new Rectangle({
            position: this._transform._position,
            dimension: this._transform._dimension,
            shadow,
            border,
            background
        });
        
        this._connection = undefined;
    }

    draw(ctx) {
        this._shape.draw(ctx);
    }

    mousedrag({deltaX, deltaY}){
        this.position = {
            x: this._transform._position.x + deltaX,
            y: this._transform._position.y + deltaY
        };
    };

    get connectionPoints(){
        const middleHeight = this._transform._dimension.height / 2;
        const middleWidth = this._transform._dimension.width / 2;
        return {
            right: {
                name:'right',
                x: this._transform._position.x + this._transform._dimension.width,
                y: this._transform._position.y + middleHeight
            },
            left: {
                name: 'left',
                x: this._transform._position.x,
                y: this._transform._position.y + middleHeight
            },
            middle: {
                name: 'middle',
                x: this._transform._position.x + middleWidth,
                y: this._transform._position.y + this._transform._dimension.height
            }
        };
    }

}