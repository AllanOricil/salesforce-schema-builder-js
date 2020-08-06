import Connector from './connector.js';

import {
    CanvasElement,
    Line
} from '@allanoricil/canvasjs';

export default class Connection extends CanvasElement{
    static get PADDING(){
        return 15;
    }

    constructor({
        name,
        from,
        to,
        line,
        connector,
        padding,
        isEditable,
    }) {
        super({
            name
        });
        this._z = 0;
        this._from = from;
        this._to = to;
        this._line = new Line(line);
        connector.position = to.position;
        this._connector = new Connector(connector);
        this._isEditable = isEditable;
        this._padding = padding || Connection.PADDING;
        this._path = [];
        this._reactToIoEvents = false;

        this.on('update', ()=>{
            this._path = this.getPath();
        });
    }

    draw(ctx) {
        if (this._path.length > 0) {
            ctx.save();
            ctx.lineWidth = this._line._weight;
            ctx.strokeStyle = this._line._color.hex;
            if(this._line._dashed)
            ctx.setLineDash(this._line._dashed);
            ctx.lineWidth = this._line._weight;
            ctx.lineCap = 'square';
            ctx.beginPath();
            const startPoint = this._path[0];
            ctx.moveTo(startPoint.x, startPoint.y);
            if (this._line && this._line._enableBezierCurves) {
                const controlPoint1 = this._path[1];
                const controlPoint2 = this._path[2];
                const endPoint = this._path[3];
                ctx.bezierCurveTo(
                    controlPoint1.x,
                    controlPoint1.y,
                    controlPoint2.x,
                    controlPoint2.y,
                    endPoint.x,
                    endPoint.y
                );
            } else {
                for (let i = 1; i < this._path.length; i++) {
                    const point = this._path[i];
                    ctx.lineTo(point.x, point.y);
                }
            }
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            //draw connector
            const lastPoint = this._path[this._path.length - 1];
            const secondLastPoint = this._path[this._path.length - 2];
            const delta_x = lastPoint.x - secondLastPoint.x;
            const delta_y = lastPoint.y - secondLastPoint.y;
            this._connector._transform._rotation._angle = Math.atan2(delta_y, delta_x);
            this._connector._transform.position = lastPoint;
            this._connector.draw(ctx);
        }
    }

    getConnectionPoints() {
        let smallerDistance = Infinity;
        let closestPoints = {};
        for (let [fromKey, fromValue] of Object.entries(this._from.connectionPoints)) {
            for (let [toKey, toValue] of Object.entries(this._to.connectionPoints)) {
                const distanceX = Math.abs(fromValue.x - toValue.x);
                if (distanceX < smallerDistance) {
                    smallerDistance = distanceX;
                    fromValue.name = fromKey;
                    toValue.name = toKey;
                    closestPoints = {
                        origin: fromValue,
                        destination: toValue
                    };
                }
            }
        }
        return closestPoints;
    }

    getPath() {
        const connectionPoints = this.getConnectionPoints();
        const origin = connectionPoints.origin;
        const destination = connectionPoints.destination;

        let hd = Math.abs(destination.x - origin.x);
        let mhd = hd / 2;

        let path = [];
        if (origin.name !== destination.name){
            let multFactor = origin.x >= destination.x ? 1 : -1;
            if(hd < 200){
                path.push({
                    x: origin.x,
                    y: origin.y,
                }, {
                    x: origin.x - 50 * multFactor,
                    y: origin.y,
                }, {
                    x: destination.x + 50 * multFactor,
                    y: destination.y,
                }, {
                    x: destination.x + this._padding * multFactor,
                    y: destination.y,
                });
            }else{
                path.push({
                    x: origin.x,
                    y: origin.y,
                }, {
                    x: origin.x - mhd * multFactor,
                    y: origin.y,
                }, {
                    x: destination.x + mhd * multFactor,
                    y: destination.y,
                }, {
                    x: destination.x + this._padding * multFactor,
                    y: destination.y,
                });
            }
        }else{
            const multFactor = origin.name === 'right' ? 1 : -1;
            path.push({
                x: origin.x,
                y: origin.y,
            }, {
                x: origin.x + 50 * multFactor,
                y: origin.y,
            }, {
                x: destination.x + 50 * multFactor,
                y: destination.y,
            }, {
                x: destination.x + this._padding * multFactor,
                y: destination.y,
            });
        }
        return path;
    }
}