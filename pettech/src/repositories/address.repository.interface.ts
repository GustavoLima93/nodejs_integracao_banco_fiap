import { IAddress } from '@/entities/models/address.interface'
import { IPerson } from '@/entities/models/person.interface'

export interface IAddressRepository {
  findAddressByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]>
  create(address: IAddress): Promise<IAddress | undefined>
}
