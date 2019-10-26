'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('inventarios','InventarioController.index');
Route.get('inventarios/view/:id','InventarioController.show');
Route.post('inventarios/create','InventarioController.create');
Route.post('inventarios/edit/:id','InventarioController.edit');/* Puede ser .put, sólo para edit*/
Route.post('inventarios/delete/:id','InventarioController.destroy');

Route.get('productos','ProductoController.index');
Route.get('productos/view/:id','ProductoController.show');
Route.post('productos/create','ProductoController.create');
Route.post('productos/edit/:id','ProductoController.edit');/* Puede ser .put, sólo para edit*/
Route.post('productos/delete/:id','ProductoController.destroy');

Route.get('proveedores','ProveedoreController.index');
Route.get('proveedores/view/:id','ProveedoreController.show');
Route.post('proveedores/create','ProveedoreController.create');
Route.post('proveedores/edit/:id','ProveedoreController.edit');/* Puede ser .put, sólo para edit*/
Route.post('proveedores/delete/:id','ProveedoreController.destroy');
