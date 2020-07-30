import Entity from "../core/entity";
import Font from "../styles/font";
import Rectangle from "../shapes/rectangle";

export default class Field extends Entity{

    constructor({
        label,
        name,
        type,
        position,
        dimension,
        border,
        font,
        reference,
        parent
    }, canvas){
        super({
            name,
            position,
            dimension,
        }, canvas);
        this._label = label;
        this._type = type || '';
        this._font = new Font(font);
        this._shape = new Rectangle({
            position: this.position,
            dimension: this.dimension,
            border: border
        });
        this._connection;
        this._parent = parent;
        this._reference = reference;

        Object.defineProperty(
            this._shape, 
            "sides", 
            {
                get: function () {
                    const middleHeight = this._transform.dimension.height / 2;
                    return {
                        right: {
                            x: this._transform.position.x + this._transform.dimension.width + 21,
                            y: this._transform.position.y + middleHeight
                        },
                        left: {
                            x: this._transform.position.x - 11,
                            y: this._transform.position.y + middleHeight
                        },
                    };
                } 
            }
        );
    }

    draw(ctx){
        ctx.save();
        this._shape.draw(ctx);
        ctx.font = this._font.font2Canvas;
        ctx.textBaseline = 'top';
        ctx.fillStyle = this._font.color.hex;
        const fieldPositionY = this._transform.position.y + this._font.dimensions.height/5;

        ctx.fillText(
            this._label,
            this._transform.position.x,
            fieldPositionY
        );

        const typeWidth = ctx.measureText(this._type).width;
        ctx.fillText(
            this._type,
            this._parent.position.x + this._parent.dimension.width - this._parent.padding.right - typeWidth - 10,
            fieldPositionY
        );
        ctx.restore();
    }
}