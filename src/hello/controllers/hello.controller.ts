import { Controller, Get, Query } from '@nestjs/common';

import { ZodValidationPipe } from '~/common/pipes/zod-validation.pipe';
import {
  HelloQueryDtoSchema,
  type HelloQueryDto
} from '~/hello/dto/hello-query.dto';
import { GetHelloMessageUseCase } from '~/hello/use-cases/get-hello-message.usecase';

@Controller()
export class HelloController {
  constructor(
    private readonly getHelloMessageUseCase: GetHelloMessageUseCase
  ) {}

  @Get()
  index(
    @Query(new ZodValidationPipe(HelloQueryDtoSchema)) query: HelloQueryDto
  ) {
    return this.getHelloMessageUseCase.execute(query.name);
  }
}
