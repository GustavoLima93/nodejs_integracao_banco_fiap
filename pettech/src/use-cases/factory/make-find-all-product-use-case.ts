import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { FindAllPRoductUseCase } from '../find-all-products'

export function makeFindAllProductUseCase() {
  const productRepository = new ProductRepository()

  const findAllProductUseCase = new FindAllPRoductUseCase(productRepository)

  return findAllProductUseCase
}
