import { Canvas } from '@allanoricil/canvasjs';
import Table from './table.js';
import gridSVG from '../../assets/images/grid_lwc.svg';

export default class Schema {
    constructor({
        canvas,
        options,
        data
    }) {
        options.backgroundImage = options.backgroundImage || `url('${gridSVG}')`;
        this._canvas = new Canvas({
            canvas,
            options
        });
        if(data) this.data = data;
    }

    getTableByName(tableName) {
        const table = this._canvas._canvasElementsManager.getCanvasElementByName(tableName);
        if(table) return table;
        else throw new Error(`Table ${tableName} doesn't exist.`);
    }

    addTable(table) {
        const newTable = new Table(table, this._canvas);
        this._canvas._canvasElementsManager.addCanvasElement(newTable);

        const tables = this._canvas._canvasElementsManager.getCanvasElementsInLayer(1);
        for(let table of tables){
            table._fields.forEach((field) => {
                if(field._reference)
                    table.addConnectionToField(field);
            });
        }
    }

    removeTableByName(name) {
        const deletedEntity = this._canvas._canvasElementsManager.getCanvasElementByName(name); 
        this._canvas._canvasElementsManager.removeCanvasElementByName(name);
        const connections = this._canvas._canvasElementsManager.getCanvasElementsInLayer(0);

        for(let connection of connections){
            if(connection._to._parent._name === deletedEntity._name || connection._from._parent._name == deletedEntity._name){
                this._canvas._canvasElementsManager.removeCanvasElementByName(connection._name);
            }
        }
    }

    addFieldToTable(field, tableName){
        const table = this.getTableByName(tableName);
        table.addField(field);
    }

    getFieldByNameFromTable(fieldName, tableName){
        const table = this.getTableByName(tableName);
        return table.getFieldByName(fieldName);
    }

    set data(data) {
        for (let table of Object.values(data)) {
            const newTable = new Table(table, this._canvas);
            this._canvas._canvasElementsManager.addCanvasElement(newTable);
        }
        
        const tables = this._canvas._canvasElementsManager.getCanvasElementsInLayer(1);
        for(let table of tables){
            table._fields.forEach((field) => {
                if(field._reference)
                    table.addConnectionToField(field, field._connectionStyles);
            });
        };

        this._canvas.draw();
    }

    get data() {
        let data = [];
        const tables = this._canvas._canvasElementsManager.getCanvasElementsInLayer(1);
        for(let table of tables){
            let newDataTable = {
                name: table._name,
                label: table._label,
                position: table._transform._position,
                dimension: { width: table._transform._dimension.width, height: table._transform._dimension.height },
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

            data.push(newDataTable);
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