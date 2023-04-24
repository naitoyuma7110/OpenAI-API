import { Test, TestingModule } from '@nestjs/testing';
import { CarehomeController } from './carehome.controller';

describe('CarehomeController', () => {
  let controller: CarehomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarehomeController],
    }).compile();

    controller = module.get<CarehomeController>(CarehomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
