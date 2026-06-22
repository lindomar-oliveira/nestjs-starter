import { UseCase } from '~/common/interfaces/use-case';

export class GetHelloMessageUseCase implements UseCase {
  execute(name?: string) {
    return `Hello, ${name ?? 'Anonymous'}!`;
  }
}
