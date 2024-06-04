import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { UpdateProductUseCase } from '../update-product'

export function makeUpdateProductUseCase() {
  const productRepository = new ProductRepository()

  const updateProductUseCase = new UpdateProductUseCase(productRepository)

  return updateProductUseCase
}
