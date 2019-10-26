'use strict'
const Proveedor = use('App/Models/Proveedore.js');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with proveedores
 */
class ProveedoreController {
  /**
   * Show a list of all proveedores.
   * GET proveedores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let proveedores = await Proveedor.all(); // El .all es igua al SELECT * FROM proveedores
    return response.json(proveedores);
  }

  /**
   * Render a form to be used for creating a new proveedore.
   * GET proveedores/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Proveedor.create(request.all());
    return response.json('Proveedor creado'); 
  }

  /**
   * Create/save a new proveedore.
   * POST proveedores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single proveedore.
   * GET proveedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let proveedor = await Proveedor.find(params.id);
    return response.json(proveedor);
  }

  /**
   * Render a form to update an existing proveedore.
   * GET proveedores/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let proveedor = await Proveedor.find(params.id);
    proveedor.merge(request.all());
    await proveedor.save();
    return response.json('Proveedor editado');
  }

  /**
   * Update proveedore details.
   * PUT or PATCH proveedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a proveedore with id.
   * DELETE proveedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let proveedor = await Proveedor.find(params.id);
    await proveedor.delete();
    return response.json('Proveedor eliminado');
  }
}

module.exports = ProveedoreController
