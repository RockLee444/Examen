'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventario extends Model {
    productos(){
        return this.belongsTo('App/Models/Producto','id_producto');
    }
}

module.exports = Inventario
