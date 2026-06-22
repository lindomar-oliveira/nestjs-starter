import {
  BadRequestException,
  Injectable,
  type PipeTransform
} from '@nestjs/common';
import { z, type ZodType } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodType) {}

  transform(value: unknown) {
    const result = this.schema.safeParse(value);

    if (!result.success) {
      const flattened = z.flattenError(result.error);

      throw new BadRequestException({
        message: 'Validation failed',
        errors: flattened.fieldErrors
      });
    }

    return result.data;
  }
}
