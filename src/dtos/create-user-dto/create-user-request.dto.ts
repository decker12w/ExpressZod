import { z } from "zod";

import { AbstractDTO } from "../abstract.dto";

export const CreateSchema = z.object({
  name: z.string(),
  age: z.number(),
  password: z.string(),
});

export type Create = z.infer<typeof CreateSchema>;

export class CreateUserRequestDTO extends AbstractDTO<typeof CreateSchema> {
  protected rules() {
    return CreateSchema;
  }
}
