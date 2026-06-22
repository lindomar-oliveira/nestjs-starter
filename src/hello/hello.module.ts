import { Module } from '@nestjs/common';

import { HelloController } from '~/hello/controllers/hello.controller';
import { GetHelloMessageUseCase } from '~/hello/use-cases/get-hello-message.usecase';

@Module({
  controllers: [HelloController],
  providers: [GetHelloMessageUseCase]
})
export class HelloModule {}
