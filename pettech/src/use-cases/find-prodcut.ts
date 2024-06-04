import { IProductRepository } from '@/repositories/product.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class FindProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(id: string) {
    const product = await this.productRepository.findById(id)

    if (!product) throw new ResourceNotFoundError()

    return product
  }
}
