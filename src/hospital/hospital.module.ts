import { Module } from '@nestjs/common';
import { HospitalController } from './hospital/hospital.controller';
import { HospitalService } from './hospital/hospital.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HospitalController],
  providers: [HospitalService, PrismaService],
})
export class HospitalModule {}
