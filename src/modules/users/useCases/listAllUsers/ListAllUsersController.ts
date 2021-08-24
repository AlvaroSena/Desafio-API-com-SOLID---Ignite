import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try{
      const { user_id } = request.headers;
      const id = user_id.toString();
      console.log(id);
  
      const allUsers = this.listAllUsersUseCase.execute({ user_id: id });
  
      return response.status(200).json(allUsers);
    } catch(error) {
      return response.status(400).json({error: "Error to list users"});
    }
  }
}

export { ListAllUsersController };
