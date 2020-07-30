import Connector from './connector.js';
import Line from '../styles/line.js';
import Entity from '../core/entity.js';

export default class Connection extends Entity{
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
        showPathPoints,
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
        this.isEditable = isEditable;
        this._showPathPoints = showPathPoints;
        this._oldToDimensions = {
            width: this._to.dimension.width,
            height: this._to.dimension.height,
        };
        this._oldFromDimensions = {
            width: this._from.dimension.width,
            height: this._from.dimension.height,
        };
        this._padding = padding || Connection.PADDING;
    }

    get connectionPoints() {
        let smallerDistance = Infinity;
        let closestPoints = {};
        for (let [fromKey, fromValue] of Object.entries(this._from.shape.sides)) {
            for (let [toKey, toValue] of Object.entries(this._to.shape.sides)) {
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

    get path() {
        const connectionPoints = this.connectionPoints;
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

    draw(ctx) {
        let path = this.path;
        if (path.length > 0) {
            ctx.save();
            ctx.lineWidth = this._line.weight;
            ctx.strokeStyle = this._line.color.hex;
            if(this._line.dashed)
            ctx.setLineDash(this._line.dashed);
            ctx.lineWidth = this._line.weight;
            ctx.lineCap = 'square';
            ctx.beginPath();
            const startPoint = path[0];
            ctx.moveTo(startPoint.x, startPoint.y);
            if (this._line && this._line.enableBezierCurves) {
                if (path.length === 3) {
                    const controlPoint = path[1];
                    const endPoint = path[2];
                    ctx.quadraticCurveTo(
                        controlPoint.x,
                        controlPoint.y,
                        endPoint.x,
                        endPoint.y
                    );
                } else {
                    const controlPoint1 = path[1];
                    const controlPoint2 = path[2];
                    const endPoint = path[3];
                    ctx.bezierCurveTo(
                        controlPoint1.x,
                        controlPoint1.y,
                        controlPoint2.x,
                        controlPoint2.y,
                        endPoint.x,
                        endPoint.y
                    );
                }
            } else {
                for (let i = 1; i < path.length; i++) {
                    const point = path[i];
                    ctx.lineTo(point.x, point.y);
                }
            }
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            //draw connector
            const lastPoint = path[path.length - 1];
            const secondLastPoint = path[path.length - 2];
            const delta_x = lastPoint.x - secondLastPoint.x;
            const delta_y = lastPoint.y - secondLastPoint.y;
            this._connector.transform.rotation.angle = Math.atan2(delta_y, delta_x);
            this._connector.transform.position = lastPoint;
            this._connector.draw(ctx);
            
        }
    }

    get to() {
        return this._to;
    }

    get from() {
        return this._from;
    }

}