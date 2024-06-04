import { IUser } from '@/entities/models/user.interface'
import { Person } from '@/entities/person.entity'

export interface IUserRepository {
  findWithPerson(userId: number): Promise<(IUser & Person) | undefined>
  findByUsername(username: string): Promise<IUser | undefined>
  create(user: IUser): Promise<IUser | undefined>
}
