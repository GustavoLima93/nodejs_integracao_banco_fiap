import { Person } from '@/entities/person.entity'
import { User } from '@/entities/user.entity'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { IUserRepository } from '@/repositories/user.repository.interface'

export class FindWithPersonUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(userId: number): Promise<(User & Person) | undefined> {
    const user = await this.userRepository.findWithPerson(userId)
    if (!user) throw new ResourceNotFoundError()
    return user
  }
}
