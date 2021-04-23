import { UsersRepository } from "../repository/UsersRepository"


class UserService{

async create(email:string){
  const usersRepository = new UsersRepository()

  const userExists = await usersRepository.findOne(email)
}
}

export {UserService}