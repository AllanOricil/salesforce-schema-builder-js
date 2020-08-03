import {
    Entity,
    Rectangle
} from '@allanoricil/canvasjs';

export default class TableFooter extends Entity {
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
            position: this.position,
            dimension: this.dimension,
            shadow,
            border,
            background
        });

        Object.defineProperty(
            this._shape,
            "sides", {
                get: function () {
                    const middleHeight = this._transform.dimension.height / 2;
                    return {
                        right: {
                            x: this._transform.position.x + this._transform.dimension.width,
                            y: this._transform.position.y + middleHeight
                        },
                        left: {
                            x: this._transform.position.x,
                            y: this._transform.position.y + middleHeight
                        },
                    };
                }
            }
        );
    }

    draw(ctx) {
        ctx.save();
        this._shape.position.x = this._parent.position.x;
        this._shape.position.y = this._parent.position.y + this._parent.dimension.height - this._transform.dimension.height;
        this._shape.draw(ctx);
        ctx.restore();
    }

}