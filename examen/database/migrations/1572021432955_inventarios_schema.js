'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventariosSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.integer('id_producto',10);
      table.integer('cantidad',10);
      table.timestamps()
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventariosSchema
