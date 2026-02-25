import { Controller, Get } from '@nestjs/common';

import { AppUseCase } from '~/app/use-cases/app.usecase';

@Controller()
export class AppController {
  constructor(private readonly appUseCase: AppUseCase) {}

  @Get()
  getHello(): string {
    return this.appUseCase.execute();
  }
}
