import { FastifyInstance } from 'fastify'
import { create } from './create'

export async function categoryRoutes(app: FastifyInstance) {
  app.post('/category', create)
}
