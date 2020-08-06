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

        this.on('mousedrag', ({x, y})=>{
            this.position = {
                x: this._transform._position.x + x,
                y: this._transform._position.y + y
            };
        });
    }

    draw(ctx) {
        ctx.save();
        this._shape.draw(ctx);
        ctx.restore();
    }

    get connectionPoints(){
        const middleHeight = this._transform._dimension.height / 2;
        return {
            right: {
                x: this._transform._position.x + this._transform._dimension.width,
                y: this._transform._position.y + middleHeight
            },
            left: {
                x: this._transform._position.x,
                y: this._transform._position.y + middleHeight
            },
        };
    }

}