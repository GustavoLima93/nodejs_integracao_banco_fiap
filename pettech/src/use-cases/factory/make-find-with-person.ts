import { UserRepository } from '@/repositories/pg/user.repository'
import { FindWithPersonUseCase } from '../find-with-person'

export function makeFindWithPersonUseCase() {
  const userRepository = new UserRepository()
  const findWithPersonUseCase = new FindWithPersonUseCase(userRepository)
  return findWithPersonUseCase
}
