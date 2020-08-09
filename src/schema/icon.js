import {
    CanvasElement,
    Rectangle
} from '@allanoricil/canvasjs';

export default class Icon extends CanvasElement {
    constructor({
        name,
        src,
        position,
        padding,
        dimension,
        background,
        border,
        parent
    }) {
        super({
            name,
            position,
            padding,
            dimension,
            parent
        });
        this._draw = false;
        this._image = new Image();
        this._image.src = src;
        this._image.addEventListener('load', () => {
            this._draw = true;
        });
        this._shape = new Rectangle({
            position: this._transform._position,
            dimension: this._transform._dimension,
            background: background,
            border: border
        });

        this.on('mousedrag', ({x, y}) => {
            this.position = {
                x: this._transform._position.x + x,
                y: this._transform._position.y + y
            };
        });
    }

    draw(ctx) {
        if(this._draw){
            ctx.save();
            this._shape.draw(ctx);
            ctx.drawImage(
                this._image,
                this._transform._position.x,
                this._transform._position.y,
                this._transform._dimension.width,
                this._transform._dimension.height
            );
            ctx.restore();
        }
    }
}