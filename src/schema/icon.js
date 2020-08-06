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
            position,
            padding,
            dimension,
            parent
        });
        this._loaded = false;
        this._image = new Image();
        this._name = name;
        this._image.src = src;
        this._image.addEventListener('load', () => {
            this._loaded = true;
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