import { 
    Entity,
    Rectangle,
    Font
}from '@allanoricil/canvasjs';
import Icon from './icon.js';
import IconColors from '../../assets/json/backgroundColorsForIcons.json';

export default class TableHeader extends Entity{
    constructor({
        title,
        icon,
        font,
        position,
        dimension,
        background,
        shadow,
        border,
        padding,
        parent,
    }, canvas) {
        super({
            name: `header_${title}`,
            position,
            dimension,
            padding,
            parent
        }, canvas);
        
        this._title = title;
        this._font = font ? new Font(font) : Font.FONT;
        this._shape = new Rectangle({
            position: this.position,
            dimension: this.dimension,
            shadow,
            border,
            background
        });

        Object.defineProperty(
            this._shape, 
            "sides", 
            {
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

        if(icon){
            const iconSrcTokens  = icon.name.split(':');
            icon.background.color = IconColors[iconSrcTokens[1]];
            this._icon = new Icon({
                name: icon.name,
                src: `${this._canvas._imagesSource || '.'}/salesforce-icons/${iconSrcTokens[0]}/${iconSrcTokens[1]}.svg`,
                parent: this,
                position: this.position,
                dimension: icon.dimension || { width: 25, height: 25},
                padding: { left: 0, top: 0, right: 0, bottom: 0},
                background: icon.background,
                padding: icon.padding,
                border: icon.border,
            });
        }
    }

    draw(ctx){
        this._shape.draw(ctx);

        //title
        ctx.save();
        ctx.font = this._font.font2Canvas;
        ctx.textBaseline = 'top';
        ctx.fillStyle = this._font.color.hex;
        ctx.fillText(
            this._title, 
            this._shape.position.x + this._padding.left + this._icon.dimension.width + this._icon.padding.right, 
            this._shape.position.y + this._padding.top
        );
        ctx.restore();

        //icon
        if(this._icon){
            this._icon.draw(ctx);
        }
    }

}