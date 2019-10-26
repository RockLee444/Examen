'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
    proveedores(){
        return this.belongsTo('App/Models/Proveedore','id_proveedor');
    }
}

module.exports = Producto
