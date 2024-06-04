import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { DeleteProductUseCase } from '../delete-product'

export function makeDeleteProductUseCase() {
  const productRepository = new ProductRepository()

  const deleteProductUseCase = new DeleteProductUseCase(productRepository)

  return deleteProductUseCase
}
