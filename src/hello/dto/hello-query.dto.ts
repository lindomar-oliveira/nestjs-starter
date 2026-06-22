import { z } from 'zod';

export const HelloQueryDtoSchema = z.object({
  name: z.string().nonempty().optional()
});

export type HelloQueryDto = z.infer<typeof HelloQueryDtoSchema>;
