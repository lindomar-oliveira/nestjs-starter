import { Module } from '@nestjs/common';

import { AppUseCase } from '~/app/use-cases/app.usecase';
import { AppController } from '~/infra/http/controllers/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppUseCase]
})
export class HttpModule {}
