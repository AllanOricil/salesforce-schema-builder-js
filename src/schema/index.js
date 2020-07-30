import Canvas from '../core/canvas.js';
import Table from './table.js';
import Connection from './connection.js';
import Field from './field.js';

export default class Schema {
    constructor({
        canvas,
        options,
        data
    }) {
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
            if(entityMap[name]){
                name = name + i;
                i++;
            }
            newTable._name = name;
            entityMap[name] = newTable;
        }

        Object.values(entityMap).forEach((entity) => {
            this._canvas.entityManager.addEntity(entity, this._canvas);
            entity._fields.forEach((field) => {
                if(field._reference && entityMap[field._reference]){
                    const entityToConnect = entityMap[field._reference];
                    const connection = {
                        name: `${entity._name}-${field._name}-${entityToConnect._name}`,
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
                        from: entityToConnect._header
                    };

                    if(entity._name === field._reference){
                        connection.to = entityToConnect._footer;
                        connection.from = field;
                    }

                    const newConnection = new Connection(connection);
                    field._connection = newConnection;
                    this._canvas.entityManager.addEntity(newConnection, this._canvas);
                }
            });
        });

        this._canvas.draw();
    }

    get data() {
        let data = {};
        const entitiesArray = this._canvas.entityManager.entities;
        for (let i = 0; i < entitiesArray.length; i++) {
            const entity = entitiesArray[i];
            const dataEntity = {};

            Object.keys(entitiesArray[i]).forEach(key => {
                if (key.charAt(0) !== '_') dataEntity[key] = entity[key];
            });

            dataEntity.connections = [];
            for (let j = 0; j < entity.connections.length; j++) {
                let connection = entity.connections[j];
                let dataConnection = {};
                Object.keys(connection).forEach(key => {
                    if (key.charAt(0) !== '_')
                        dataConnection[key] = connection[key];
                });
                dataConnection.to = connection.to.name;
                dataEntity.connections.push(dataConnection);
            }
            data[entity.name] = dataEntity;
        }
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
        var link = document.createElement('a');
        link.download = `${name}.png`;
        link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        link.click();
    }

    getConnectionTo(entity) {
        return this._canvas.entityManager.getEntitiesInLayer(0).find(connection => connection.to.name === entity.name);
    }
    
    getConnectionByName(name) {
        return this._canvas.entityManager.getEntitiesInLayer(0).find(connection =>  connection.to.name === name);
    }

    removeConnection(to) {
        const connections = this._canvas.entityManager.getEntitiesInLayer(0);
        for (let i = 0; i < connections.length; i++) {
            if (connections[i].to.name === to.name) {
                connections.splice(i, 1);
                return;
            }
        }
    }

}