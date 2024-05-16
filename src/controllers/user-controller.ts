import { CreateUserRequestDTO } from "../dtos/create-user-dto/create-user-request.dto";
import { CreateUserUseCase } from "../use-cases/create-user.use-case";
import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
  const data = new CreateUserRequestDTO({
    ...req.body,
  });

  const createdUserDTO = new CreateUserUseCase().execute(data);

  return res.json(createdUserDTO);
}
