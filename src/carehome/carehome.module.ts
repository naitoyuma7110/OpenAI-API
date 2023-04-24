import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CarehomeController } from './carehome/carehome.controller';
import { CarehomeService } from './carehome/carehome.service';

@Module({
  controllers: [CarehomeController],
  providers: [CarehomeService, PrismaService],
})
export class CarehomeModule {}
