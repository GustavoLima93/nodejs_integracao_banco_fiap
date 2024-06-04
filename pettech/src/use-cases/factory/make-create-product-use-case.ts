import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { CrerateProductUseCase } from '../create-product'

export function makeCreateProductUseCase() {
  const productRepository = new ProductRepository()
  const createProductUseCase = new CrerateProductUseCase(productRepository)

  return createProductUseCase
}
