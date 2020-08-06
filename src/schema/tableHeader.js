import { 
    CanvasElement,
    Rectangle,
    Font
}from '@allanoricil/canvasjs';
import Icon from './icon.js';

export default class TableHeader extends CanvasElement{
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
            position: this._transform._position,
            dimension: this._transform._dimension,
            shadow,
            border,
            background
        });

        if(icon){
            this._icon = new Icon({
                name: icon.name,
                src: icon.src,
                parent: this,
                position: {x: this._transform._position.x + icon.padding.left, y: this._transform._position.y + icon.padding.top},
                dimension: icon.dimension || { width: 25, height: 25},
                padding: icon.padding,
                background: icon.background,
                padding: icon.padding,
                border: icon.border,
            });
        }

        this._connection = undefined;

        this.on('mousedrag', ({x, y})=>{
            this.position = {
                x: this._transform._position.x + x,
                y: this._transform._position.y + y
            };

            this._icon.emit('mousedrag', {x, y});
        });
    }

    draw(ctx){
        this._shape.draw(ctx);
        //title
        ctx.save();
        ctx.font = this._font.font2Canvas;
        ctx.textBaseline = 'top';
        ctx.fillStyle = this._font._color.hex;
        ctx.fillText(
            this._title, 
            this._shape._transform._position.x + this._padding._left + this._icon._transform._dimension.width + this._icon._padding._right, 
            this._shape._transform._position.y + this._padding._top
        );
        ctx.restore();

        //icon
        if(this._icon){
            this._icon.draw(ctx);
        }
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