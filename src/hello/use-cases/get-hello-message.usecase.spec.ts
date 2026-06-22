import { GetHelloMessageUseCase } from '~/hello/use-cases/get-hello-message.usecase';

describe('GetHelloMessageUseCase', () => {
  let useCase: GetHelloMessageUseCase;

  beforeEach(() => {
    useCase = new GetHelloMessageUseCase();
  });

  it('should return "Hello, Anonymous!" when no name is provided', () => {
    expect(useCase.execute()).toBe('Hello, Anonymous!');
    expect(useCase.execute(undefined)).toBe('Hello, Anonymous!');
  });

  it('should return "Hello, John!" when a name is provided', () => {
    expect(useCase.execute('John')).toBe('Hello, John!');
  });
});
