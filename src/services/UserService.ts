import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repository/UsersRepository"


class UserService{

async create(email:string){
  const usersRepository =  getCustomRepository(UsersRepository)

  const userExists = await usersRepository.findOne({email})
}
}

export {UserService}