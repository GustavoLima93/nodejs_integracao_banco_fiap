import { IProductRepository } from '@/repositories/product.repository.interface'

export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(id: string): Promise<void> {
    return this.productRepository.delete(id)
  }
}
