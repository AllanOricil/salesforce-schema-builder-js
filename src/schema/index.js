import { Canvas } from '@allanoricil/canvasjs';
import Table from './table.js';
import Connection from './connection.js';
import gridSVG from '../../assets/images/grid.svg';

export default class Schema {
    constructor({
        canvas,
        options,
        data
    }) {
        options.backgroundImage = `url('${gridSVG}')`;
        this._canvas = new Canvas({
            canvas,
            options
        });
        this.data = data;
    }

    getTableByName(name) {
        return this._canvas.entityManager.getEntityByName(name);
    }

    addTable(table) {
        const newTable = new Table(table, this._canvas);
        this._canvas.entityManager.addEntity(newTable, this._canvas);

        const tables = this._canvas.entityManager.getEntitiesInLayer(1);
        for(let table of tables){
            table._fields.forEach((field) => {
                if(field._reference){
                    const referenceTable = this._canvas.entityManager.getEntityByName(field._reference);
                    if(referenceTable){
                        const connection = {
                            name: `${table._name}-${field._name}-${referenceTable._name}`,
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
    
                        if(table._name === field._reference){
                            connection.to = referenceTable._footer;
                            connection.from = field;
                        }
    
                        const newConnection = new Connection(connection);
                        field._connection = newConnection;
                        this._canvas.entityManager.addEntity(newConnection, this._canvas);
                    }
                }
            });
        }
    }

    removeTableByName(name) {
        const deletedEntity = this._canvas.entityManager.getEntityByName(name); 
        this._canvas.entityManager.removeEntityByName(name);
        const connections = this._canvas.entityManager.getEntitiesInLayer(0);

        for(let connection of connections){
            if(connection._to._parent._name === deletedEntity._name || connection._from._parent._name == deletedEntity._name){
                this._canvas.entityManager.removeEntityByName(connection._name);
            }
        }
    }

    addFieldToTable(field, tableName){
        const table = this._canvas.entityManager.getEntityByName(tableName);
        table.addField(field);
    }

    set data(data) {
        let entityMap = {};
        let i = 0;
        for (let [name, table] of Object.entries(data)) {
            const newTable = new Table(table, this._canvas);
            entityMap[name] = newTable;
        }

        Object.values(entityMap).forEach((table) => {
            this._canvas.entityManager.addEntity(table, this._canvas);
            table._fields.forEach((field) => {
                table.addConnectionToField(field);
            });
        });

        this._canvas.draw();
    }

    get data() {
        let data = {
            tables: []
        };
        const tables = this._canvas.entityManager.getEntitiesInLayer(1);
        for(let table of tables){
            let newDataTable = {
                name: table._name,
                label: table._label,
                position: table.position,
                dimension: { width: table.dimension.width, height: table.dimension.height },
                icon: table._header._icon._name,
                fields: []
            };
            table._fields.forEach(field => {
                newDataTable.fields.push({
                    name: field._name,
                    label: field._label,
                    reference: field._reference
                });
            });

            data.tables.push(newDataTable);
        }

        return data;
    }

    on(event, callback) {
        if (
            event === 'onkeypress' ||
            event === 'onkeyup' ||
            event === 'onkeydown'
        ) {
            window[event] = callback;
        } else this._canvas._el.addEventListener(event, callback);
    }

    saveAsImage(name) {
        this.canvas.saveAsImage(name);
    }

}