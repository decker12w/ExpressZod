import { z } from "zod";

import { AbstractDTO } from "../abstract.dto";

export const CreateSchema = z.object({
  name: z.string(),
});

export type Create = z.infer<typeof CreateSchema>;

export class CreateUserResponseDTO extends AbstractDTO<typeof CreateSchema> {
  protected rules() {
    return CreateSchema;
  }
}
