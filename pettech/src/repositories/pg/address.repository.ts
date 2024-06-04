import { IAddressRepository } from '../address.repository.interface'
import { database } from '@/lib/pg/db'
import { IAddress } from '@/entities/models/address.interface'
import { IPerson } from '@/entities/models/person.interface'

export class AddressRepository implements IAddressRepository {
  async findAddressByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]> {
    const offset = (page - 1) * limit

    const query = `
      SELECT address.*, person.*
      FROM address
      JOIN person ON address.person_id = person.id
      WHERE person.id = $1
      LIMIT $2 OFFSET $3
    `
    const result = await database.clientInstance?.query<IAddress & IPerson>(
      query,
      [personId, limit, offset],
    )

    return result?.rows || []
  }

  async create({
    street,
    city,
    state,
    zip_code,
    person_id,
  }: IAddress): Promise<IAddress | undefined> {
    const result = await database.clientInstance?.query<IAddress>(
      `
      INSERT INTO "address" (street, city, state, zip_code, person_id) VALUES 
      ($1, $2, $3, $4, $5) RETURNING *
    `,
      [street, city, state, zip_code, person_id],
    )

    return result?.rows[0]
  }
}
