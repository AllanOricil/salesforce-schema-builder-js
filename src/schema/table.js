import Field from './field.js';
import TableHeader from './tableHeader.js';
import TableFooter from './tableFooter.js';
import Connection from './connection.js';

import {
    CanvasElement,
    Rectangle,
    Font
} from '@allanoricil/canvasjs';

export default class Table extends CanvasElement {
    constructor({
        name,
        label,
        icon,
        font,
        fields,
        position,
        dimension,
        isDraggable,
        background,
        shadow,
        border,
        header,
        footer,
        padding
    }, canvas) {
        super({
            name,
            position,
            dimension,
            padding
        }, canvas);
        this._z = 1;
        this._label = label;
        this._font = font ? new Font(font) : Font.FONT;
        this._isDraggable = isDraggable || false;
        this._shape = new Rectangle({
            position: this._transform._position,
            dimension: this._transform._dimension,
            border,
            background
        });

        this._header = new TableHeader({
            title: label,
            font: font,
            icon: icon,
            parent: this,
            position: this._transform._position,
            dimension: {
                width: this._transform._dimension.width,
                height: 35
            },
            padding,
            border: header && header.border ? header.border : border
        }, canvas);

        this._footer = new TableFooter({
            name: label,
            font: font,
            parent: this,
            position: {
                x: this._transform._position.x,
                y: this._transform._position.y + this._transform._dimension.height - 35
            },
            dimension: {
                width: this._transform._dimension.width,
                height: 35
            },
            padding,
            border: footer && footer.border ? footer.border : border,
            shadow
        }, canvas);

        this._showScrollBar = false;
        this._scrollBarWidth = 5;
        this._scrollPosition = 0;
        this._scrollBarColor = 'rgba(0,0,0,0.2)';
        this._scrollBar = new Path2D();
        
        this.scrollableAreaWdith = this._shape._transform._dimension.width - 2 * this._padding._right;
        this.scrollableAreaX1Position = this._shape._transform._position.x + this._padding._left;
        this.scrollableAreaX2Position = this._shape._transform._position.x + this._padding._left + this.scrollableAreaWdith;
        this.scrollableAreaY1Position = this._shape._transform._position.y + this._header._transform._dimension.height + 10;
        this.scrollableAreaY2Position = this._shape._transform._position.y + this._shape._transform._dimension.height - this._footer._transform._dimension.height - 10;

        this._fields = [];
        let index = 0;
        fields.forEach(field => {
            const fieldFont = new Font(field.font);
            const fieldToInsert = new Field({
                label: field.label,
                name: field.name,
                parent: this,
                reference: field.reference,
                position: {
                    x: this.scrollableAreaX1Position,
                    y: this._shape._transform._position.y + fieldFont._dimensions.height * index
                },
                dimension: {
                    width: this.scrollableAreaWdith - this._scrollBarWidth,
                    height: fieldFont._dimensions.height
                },
                font: field.font,
                border: field.border,
                type: field.type,
                padding: field.padding || { left: 15, top: 0, right: 0, bottom: 0},
                index: index
            }, canvas);
            this._fields.push(fieldToInsert);

            index++;
        });

        this._connections = [];

        this.clipAreaHeight = this._shape._transform._dimension.height - this._header._transform._dimension.height - this._footer._transform._dimension.height - 20;
        this.scrollableAreaHeight = this._fields.length * this._fields[0]._font._dimensions.height;
        this.hasScroolBar = this.scrollableAreaHeight > this.clipAreaHeight;
        this.scrollbarX1Position = this.scrollableAreaX2Position - this._scrollBarWidth;
        this.percentOfVisibleFields =  (this.clipAreaHeight / this._fields[0]._font._dimensions.height) / this._fields.length;
        this.scrollbarSize = parseInt(this.clipAreaHeight * this.percentOfVisibleFields).toFixed(2);
        this.initialFieldYPosition =  this.scrollableAreaY1Position + this._scrollPosition;

        this.on('mousedrag', ({x, y}) => {
            const transformedPoint = this._canvas.getTransformedPoint(x, y);
            this.position = {
                x: transformedPoint.x - this._transform._dimension.width / 2,
                y: transformedPoint.y - this._transform._dimension.height / 2,
            };
            this.calculateScrollbarProperties();
            const parentDragX = this._transform._position.x - this._transform._oldPosition.x;
            const parentDragY = this._transform._position.y - this._transform._oldPosition.y;
            this._header.emit('mousedrag', { x: parentDragX, y: parentDragY } );
            this._footer.emit('mousedrag', { x: parentDragX, y: parentDragY } );
            this._fields.forEach(field =>field.emit('mousedrag', {x: parentDragX, y: parentDragY}));


            this._connections.forEach(connection => {
                connection.emit('update');
            });
        });

        this.on('wheel', (e) => {
            let mousePosition = this._canvas.getTransformedPoint(e.offsetX, e.offsetY);
            if (
                mousePosition.x >= this.scrollableAreaX1Position &&
                mousePosition.x <= this.scrollableAreaX2Position &&
                mousePosition.y >= this.scrollableAreaY1Position &&
                mousePosition.y <= this.scrollableAreaY2Position
            ) {
                const delta = Math.sign(e.deltaY);
                const cond1 = this.initialFieldYPosition + this.scrollableAreaHeight > this.scrollableAreaY2Position;
                const cond2 = this.initialFieldYPosition < this.scrollableAreaY1Position;
                if ((cond1 && delta > 0) || (cond2 && delta < 0)) { 
                    this._scrollPosition -= delta * 5;
                    this.initialFieldYPosition =  this.scrollableAreaY1Position + this._scrollPosition;
                    this._fields.forEach(field => field.emit('wheel', this.initialFieldYPosition));
                }
            }
        });

        this.on('mousemove', ({x, y}) => {
            this._fields.forEach(field => {
                field.emit('mousemove', {x, y});
            });

            if (this._canvas.ctx.isPointInPath(this._scrollBar, x, y, 'nonzero')) {
                this._scrollBarColor = 'rgba(0,0,0,0.3)';
            } else {
                this._scrollBarColor = 'rgba(0,0,0,0.2)';
            }
        });

        this.on('mouseenter', (e) => {
            this._showScrollBar = true;
        });

        this.on('mouseleave', (e) => {
            this._showScrollBar = false;
        });
    }

    draw(ctx) {
        //shape
        this._shape.draw(ctx);

        //header
        this._header.draw(ctx);

        //scrollable area
        ctx.save();
        ctx.beginPath();
        ctx.rect(
            this.scrollableAreaX1Position,
            this.scrollableAreaY1Position,
            this.scrollableAreaWdith,
            this.clipAreaHeight
        );
        ctx.clip();

        this._fields.forEach((field) => {
            field.draw(ctx);
        });
        ctx.restore();

        //scrollbar
        if (this.hasScroolBar && this._showScrollBar) {
            ctx.save();
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.beginPath();
            ctx.rect(
                this.scrollbarX1Position,
                this.scrollableAreaY1Position,
                this._scrollBarWidth,
                this.clipAreaHeight
            );
            ctx.fill();

            ctx.fillStyle = this._scrollBarColor;
            ctx.beginPath();
            this._scrollBar = new Path2D();
            this._scrollBar.rect(
                this.scrollbarX1Position,
                this.scrollableAreaY1Position - this._scrollPosition * this.percentOfVisibleFields,
                this._scrollBarWidth,
                this.scrollbarSize
            );
            ctx.fill(this._scrollBar);
            ctx.restore();
        }

        this._footer.draw(ctx);
    }

    addField(field) {
        const fieldFont = new Font(field.font);
        const fieldToInsert = new Field({
            label: field.label,
            name: field.name,
            parent: this,
            reference: field.reference,
            position: {
                x: this._shape._transform._position.x,
                y: fieldFont._dimensions.height * this._fields.length
            },
            dimension: {
                width: this.scrollableAreaWdith - 10,
                height: fieldFont._dimensions.height
            },
            font: fieldFont,
            border: field.border,
            type: field.type
        }, this._canvas);
        this._fields.push(fieldToInsert);
        this.addConnectionToField(fieldToInsert);
        this.calculateScrollbarProperties();
    }

    addConnectionToField(field) {
        if (field._reference) {
            const referenceTable = this._canvas.canvasElementsManager.getCanvasElementByName(field._reference);
            if (referenceTable) {
                const connection = {
                    name: `${this._name}-${field._name}-${referenceTable._name}`,
                    isEditable: false,
                    connector: {
                        shape: 'triangle',
                        dimension: {
                            width: 10,
                            height: 10
                        },
                        color: 'rgb(180,180,180)'
                    },
                    line: {
                        weight: 3,
                        color: 'rgb(180,180,180)',
                        enableBezierCurves: true
                    },
                    to: field,
                    from: referenceTable._header
                };

                if (this._name === field._reference) {
                    connection.to = referenceTable._footer;
                    connection.from = field;

                    referenceTable._footer._connecion = connection;
                }
                const newConnection = new Connection(connection);

                referenceTable._connections.push(newConnection);
                field.addConnection(newConnection);
                this._canvas.canvasElementsManager.addCanvasElement(newConnection, this._canvas);
            }
        }
    }

    calculateScrollbarProperties(){
        this.scrollableAreaWdith = this._shape._transform._dimension.width - 2 * this._padding._right;
        this.scrollableAreaX1Position = this._shape._transform._position.x + this._padding._left;
        this.scrollableAreaX2Position = this._shape._transform._position.x + this._padding._left + this.scrollableAreaWdith;
        this.scrollableAreaY1Position = this._shape._transform._position.y + this._header._transform._dimension.height + 10;
        this.scrollableAreaY2Position = this._shape._transform._position.y + this._shape._transform._dimension.height - this._footer._transform._dimension.height - 10;
        this.clipAreaHeight = this._shape._transform._dimension.height - this._header._transform._dimension.height - this._footer._transform._dimension.height - 20;
        this.scrollableAreaHeight = this._fields.length * this._fields[0]._font._dimensions.height;
        this.hasScroolBar = this.scrollableAreaHeight > this.clipAreaHeight;
        this.scrollbarX1Position = this.scrollableAreaX2Position - this._scrollBarWidth;
        this.percentOfVisibleFields =  (this.clipAreaHeight / this._fields[0]._font._dimensions.height) / this._fields.length;
        this.scrollbarSize = parseInt(this.clipAreaHeight * this.percentOfVisibleFields).toFixed(2);
    }

    
}