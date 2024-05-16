import { CreateUserRequestDTO } from "../dtos/create-user-dto/create-user-request.dto";

export class CreateUserUseCase {
  execute(data: CreateUserRequestDTO) {
    data.getAll();
    const userCreated = {
      name: "dsad",
      age: 25,
      password: "dsad",
    };
    return new CreateUserRequestDTO(userCreated);
  }
}
