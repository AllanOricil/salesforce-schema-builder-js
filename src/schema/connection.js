import Connector from './connector.js';

import {
    CanvasElement,
    Line
} from '@allanoricil/canvasjs';
import TableHeader from './tableHeader.js';
import TableFooter from './tableFooter.js';
import Field from './field.js';

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
    }, canvas) {
        super({
            name
        }, canvas);
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
            ctx.strokeStyle = this._line._color.rgba;
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
        let connectionPoints = {};

        const fromX1Position = this._from._transform._position.x;
        const fromX2Position = fromX1Position + this._from._transform._dimension.width;
        const toX1Position = this._to._transform._position.x;
        const toX2Position = toX1Position + this._to._transform._dimension.width;

        const fromConnectionPoints = this._from.connectionPoints;
        const toConnectionPoints = this._to.connectionPoints;

        if(this._to._parent._name === this._from._parent._name){
            connectionPoints = {
                origin: fromConnectionPoints.right,
                destination: toConnectionPoints.right
            };
        }else{
            if(
                (this._to instanceof Field && this._from instanceof TableHeader) || 
                (this._from instanceof Field && this._to instanceof TableFooter)
            ){
                let smallerDistance = Infinity;
                for(const [fromName, fromPoint] of Object.entries(fromConnectionPoints)){
                    for(const [toName, toPoint] of Object.entries(toConnectionPoints)){
                        if(fromName === 'middle' || toName === 'middle') continue;
                        const distance = Math.abs(fromPoint.x - toPoint.x);
                        if(distance < smallerDistance){
                            smallerDistance = distance;
                            connectionPoints = {
                                origin: fromPoint,
                                destination: toPoint
                            };
                        }
                    }
                }
            }else{
                const isMiddle = (fromX1Position >= toX1Position && fromX1Position <= toX2Position) || 
                                 (fromX2Position >= toX1Position && fromX2Position <= toX2Position);
                if(isMiddle){
                    connectionPoints = {
                        origin: fromConnectionPoints.middle,
                        destination: toConnectionPoints.middle
                    };
                }else{
                    const distanceX = fromConnectionPoints.middle.x - toConnectionPoints.middle.x;
                    if(distanceX > 0){
                        connectionPoints = {
                            origin: fromConnectionPoints.left,
                            destination: toConnectionPoints.right
                        };
                    }else{
                        connectionPoints = {
                            origin: fromConnectionPoints.right,
                            destination: toConnectionPoints.left
                        };
                    }
                }
            }
        }
        return connectionPoints;
    }

    getPath() {
        const connectionPoints = this.getConnectionPoints();
        const origin = connectionPoints.origin;
        const destination = connectionPoints.destination;

        let hd = Math.abs(destination.x - origin.x);
        let vd = Math.abs(destination.y - origin.y);
        let mhd = hd / 2;
        let mvd = vd / 2;

        let path = [];

        if(this._from._parent._name === this._to._parent._name){
            path.push(
            {
                x: origin.x,
                y: origin.y,
            },
            {
                x: origin.x + 25,
                y: origin.y,
            },
            {
                x: destination.x + 25 + this._padding,
                y: destination.y,
            }, 
            {
                x: destination.x + this._padding,
                y: destination.y,
            });
        }else{
            if (origin.name !== destination.name){
                let directionFactor = origin.name === 'right' ? 1 : -1;
                path.push({
                    x: origin.x,
                    y: origin.y,
                }, {
                    x: origin.x + mhd * directionFactor,
                    y: origin.y,
                }, {
                    x: destination.x - mhd * directionFactor - this._padding * directionFactor,
                    y: destination.y,
                }, {
                    x: destination.x - this._padding * directionFactor,
                    y: destination.y,
                });
            }else{
                if(origin.name === 'middle' && destination.name === 'middle'){
                    path.push({
                        x: origin.x,
                        y: origin.y,
                    }, {
                        x: origin.x,
                        y: origin.y - mvd,
                    }, {
                        x: destination.x,
                        y: destination.y + mvd + this._padding,
                    }, {
                        x: destination.x,
                        y: destination.y + this._padding,
                    });
                }else{
                    const directionFactor = origin.name === 'right' ?  1 : -1;
                    path.push({
                        x: origin.x,
                        y: origin.y,
                    }, {
                        x: origin.x + 25 + mhd * directionFactor,
                        y: origin.y,
                    }, {
                        x: destination.x + 25 + mhd * directionFactor,
                        y: destination.y,
                    }, {
                        x: destination.x + this._padding,
                        y: destination.y,
                    });
                }
            }
        }
        return path;
    }
}