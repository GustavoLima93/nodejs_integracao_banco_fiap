import { IAddress } from '@/entities/models/address.interface'
import { IAddressRepository } from '@/repositories/address.repository.interface'

export class CreateAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async handler(address: IAddress): Promise<IAddress | undefined> {
    return this.addressRepository.create(address)
  }
}
