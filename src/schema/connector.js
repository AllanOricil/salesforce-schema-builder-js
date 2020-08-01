import {
    Transform,
    Color
} from '@allanoricil/canvasjs';

export default class Connector {

    constructor({
        position,
        dimension,
        color
    }) {
        this._transform = new Transform({
            position: position,
            dimension: dimension
        });
        this._color = new Color(color);
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this._transform.position.x , this._transform.position.y);
        ctx.rotate(this._transform.rotation.angle);
        ctx.translate(-this._transform.position.x, -this._transform.position.y);

        ctx.strokeStyle = this._color.rgba;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this._transform.position.x - 5, this._transform.position.y, 5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = this._color.rgba;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this._transform.position.x + 2, this._transform.position.y);
        ctx.lineTo(this._transform.position.x + 14, this._transform.position.y);
        ctx.moveTo(this._transform.position.x + 2, this._transform.position.y);
        ctx.lineTo(this._transform.position.x + 14, this._transform.position.y +  8);
        ctx.moveTo(this._transform.position.x + 2, this._transform.position.y);
        ctx.lineTo(this._transform.position.x + 14, this._transform.position.y - 8);
        ctx.stroke();

        ctx.restore();
    }

    get transform() {
        return this._transform;
    }



}