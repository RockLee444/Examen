'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.integer('id_proveedor',10);
      table.string('nombre');
      table.integer('precio',10);
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
