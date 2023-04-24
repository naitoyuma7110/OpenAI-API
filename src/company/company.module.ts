import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyController } from './controller/company.controller';
import { CompanyService } from './service/company.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
})
export class CompanyModule {}
