import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';

import { AppModule } from '~/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should return "Hello, Anonymous!" when no name is provided', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello, Anonymous!');
  });

  it('should return "Hello, John!" when name is provided', () => {
    return request(app.getHttpServer())
      .get('/')
      .query({ name: 'John' })
      .expect(200)
      .expect('Hello, John!');
  });

  it('should return 400 when name is an empty string', () => {
    return request(app.getHttpServer())
      .get('/')
      .query({ name: '' })
      .expect(400);
  });
});
