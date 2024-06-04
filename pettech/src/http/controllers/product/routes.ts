import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findAllProducts } from './find-all-products'
import { findProduct } from './find-product'
import { update } from './update'
import { deleteProduct } from './delete'

export async function productRoutes(app: FastifyInstance) {
  app.get('/product', findAllProducts)
  app.get('/product/:id', findProduct)
  app.post('/product', create)
  app.put('/product/:id', update)
  app.delete('/product/:id', deleteProduct)
}
