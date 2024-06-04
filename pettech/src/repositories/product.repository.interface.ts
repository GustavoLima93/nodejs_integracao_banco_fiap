import { IProduct } from '@/entities/models/product.interface'

export interface IProductRepository {
  findAll(page: number, limit: number): Promise<IProduct[]>
  findById(id: string): Promise<IProduct | null>
  create(product: IProduct): Promise<IProduct>
  update(product: IProduct): Promise<IProduct>
  delete(id: string): Promise<void>
}
