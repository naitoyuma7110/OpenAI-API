import { Test, TestingModule } from '@nestjs/testing';
import { CarehomeService } from './carehome.service';

describe('CarehomeService', () => {
  let service: CarehomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarehomeService],
    }).compile();

    service = module.get<CarehomeService>(CarehomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
