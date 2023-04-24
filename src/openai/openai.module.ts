import { Module } from '@nestjs/common';
import { OpenaiService } from './service/openai.service';
import { OpenaiController } from './controller/openai.controller';

@Module({
  controllers: [OpenaiController],
  providers: [OpenaiService],
})
export class OpenaiModule {}
