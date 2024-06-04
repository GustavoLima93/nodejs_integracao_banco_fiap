import { IPerson } from '@/entities/models/person.interface'

export interface IPersonRepository {
  create(person: IPerson): Promise<IPerson | undefined>
}
