import Field from './field.js';
import TableHeader from './tableHeader.js';
import TableFooter from './tableFooter.js';
import Connection from './connection.js';

import {
    Entity,
    Rectangle,
    Font
} from '@allanoricil/canvasjs';

export default class Table extends Entity {
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
            position: this.position,
            dimension: this.dimension,
            border,
            background
        });

        this._header = new TableHeader({
            title: label,
            font: font,
            icon: icon,
            parent: this,
            position: this.position,
            dimension: {
                width: this.dimension.width,
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
                x: this.position.x,
                y: this.position.y + this.dimension.height - 35
            },
            dimension: {
                width: this.dimension.width,
                height: 35
            },
            padding,
            border: footer && footer.border ? footer.border : border,
            shadow
        }, canvas);

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
                    x: this._shape.position.x,
                    y: fieldFont.dimensions.height * index
                },
                dimension: {
                    width: this._shape.dimension.width - 2 * this._padding.right - 10,
                    height: fieldFont.dimensions.height
                },
                font: fieldFont,
                border: field.border,
                type: field.type
            }, canvas);
            this._fields.push(fieldToInsert);

            index++;
        });

        this._showScrollBar = false;
        this._scrollPosition = 0;
        this._scrollBarColor = 'rgba(0,0,0,0.2)';
        this._scrollBar = new Path2D();

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
                if ((cond1 && delta > 0) || (cond2 && delta < 0)) this._scrollPosition -= delta * 5;
            }
        });

        this.on('mousemove', (e) => {
            let mousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
            this._fields.forEach(field => {
                if (field.contains(mousePosition)) {
                    field._shape.background.color = '#f3f2f2';
                } else {
                    field._shape.background.color = 'white';
                }
            });

            if (this._canvas.ctx.isPointInPath(this._scrollBar, mousePosition.x, mousePosition.y, 'nonzero')) {
                this._scrollBarColor = 'rgba(0,0,0,0.3)';
            } else {
                this._scrollBarColor = 'rgba(0,0,0,0.2)';
            }
        });

        this.on('mousehover', (e) => {
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
            this._shape.position.x + this._padding.left,
            this.scrollableAreaY1Position,
            this._shape.dimension.width - 2 * this._padding.right,
            this.clipAreaHeight
        );
        ctx.clip();

        this._fields.forEach((field, index) => {
            const fieldYPosition = this.initialFieldYPosition + field._font.dimensions.height * index;
            field.position = {
                x: this._shape.position.x + this._padding.left,
                y: fieldYPosition
            };

            const isFieldOutsideOfScrollableArea =
                fieldYPosition < this.scrollableAreaY1Position - 10 ||
                fieldYPosition > this.scrollableAreaY2Position - 15;

            if (field._connection) {
                if (field._reference !== this._name) {
                    if (isFieldOutsideOfScrollableArea) {
                        field._connection._to = this._header;
                    } else {
                        field._connection._to = field;
                    }
                } else {
                    if (isFieldOutsideOfScrollableArea) {
                        field._connection._from = this._header;
                    } else {
                        field._connection._from = field;
                    }
                }
            }

            field.draw(ctx);
        });
        ctx.restore();

        //scrollbar
        if (this.hasScroolBar && this._showScrollBar) {
            ctx.save();
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.beginPath();
            ctx.rect(
                this.scrollableAreaX2Position - 5,
                this.scrollableAreaY1Position,
                5,
                this.clipAreaHeight
            );
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.fillStyle = this._scrollBarColor;
            ctx.beginPath();
            this._scrollBar = new Path2D();
            this._scrollBar.rect(
                this.scrollableAreaX2Position - 5,
                this.scrollableAreaY1Position - this._scrollPosition * this.percentOfVisibleFields,
                5,
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
                x: this._shape.position.x,
                y: fieldFont.dimensions.height * this._fields.length
            },
            dimension: {
                width: this._shape.dimension.width - 2 * this._padding.right - 10,
                height: fieldFont.dimensions.height
            },
            font: fieldFont,
            border: field.border,
            type: field.type
        }, this._canvas);
        this._fields.push(fieldToInsert);
        this.addConnectionToField(fieldToInsert);
    }

    addConnectionToField(field) {
        if (field._reference) {
            const referenceTable = this._canvas.entityManager.getEntityByName(field._reference);
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
                }

                const newConnection = new Connection(connection);
                field._connection = newConnection;
                this._canvas.entityManager.addEntity(newConnection, this._canvas);
            }
        }
    }

    setIcon() {

    }

    get initialFieldYPosition() {
        return this.scrollableAreaY1Position + this._scrollPosition;
    }

    get scrollableAreaX1Position() {
        return this._shape.position.x + this._padding.left;
    }

    get scrollableAreaX2Position() {
        return this._shape.position.x + this._padding.left + this._shape.dimension.width - 2 * this._padding.right;
    }

    get scrollableAreaY1Position() {
        return this._shape.position.y + this._header.dimension.height + 10;
    }

    get scrollableAreaY2Position() {
        return this._shape.position.y + this._shape.dimension.height - this._footer.dimension.height - 10;
    }

    get clipAreaHeight() {
        return this._shape.dimension.height - this._header.dimension.height - this._footer.dimension.height - 20;
    }

    get scrollableAreaHeight() {
        return this._fields.length * this._fields[0]._font.dimensions.height;
    }

    get hasScroolBar() {
        return this.scrollableAreaHeight > this.clipAreaHeight;
    }

    get percentOfVisibleFields() {
        const numberOfVisibleFields = (this.clipAreaHeight / this._fields[0]._font.dimensions.height);
        return numberOfVisibleFields / this._fields.length;
    }

    get scrollbarSize() {
        return parseInt(this.clipAreaHeight * this.percentOfVisibleFields).toFixed(2);
    }
}