import { request, response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui

    const userId = this.usersRepository.findById(user_id);

    if(!userId) {
      throw new Error("This id not exists");
    }

    return userId;
  }
}

export { ShowUserProfileUseCase };
