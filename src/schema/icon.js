import Entity from "../core/entity";
import Rectangle from "../shapes/rectangle";

export default class Icon extends Entity {
    constructor({
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
        this._image.src = src;
        this._image.addEventListener('load', () => {
            this._loaded = true;
        });
        this._shape = new Rectangle({
            position: this.position,
            dimension: this.dimension,
            background: background,
            border: border
        });
    }

    get image() {
        return this._image;
    }

    get loaded() {
        return this._loaded;
    }

    draw(ctx) {
        ctx.save();
        if(this._shape.background){
            ctx.translate(this.padding.left,  this.padding.top);
            this._shape.draw(ctx);
            ctx.translate(-this.padding.left, -this.padding.top);
        }
        ctx.drawImage(
            this.image,
            this.position.x + this.padding.left,
            this.position.y + this.padding.top,
            this.dimension.width,
            this.dimension.height
        );
        ctx.restore();
    }
}