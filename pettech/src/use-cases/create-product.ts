import { IProduct } from '@/entities/models/product.interface'
import { IProductRepository } from '@/repositories/product.repository.interface'

export class CrerateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(product: IProduct): Promise<IProduct> {
    return this.productRepository.create(product)
  }
}
