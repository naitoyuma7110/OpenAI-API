import { Module } from '@nestjs/common';
import { FacilityService } from './facility/facility.service';
import { FacilityController } from './facility/facility.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [FacilityService, PrismaService],
  controllers: [FacilityController],
})
export class FacilityModule {}
