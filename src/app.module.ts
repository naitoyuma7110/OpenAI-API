import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { FacilityModule } from './facility/facility.module';
import { HospitalModule } from './hospital/hospital.module';
import { CarehomeModule } from './carehome/carehome.module';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [
    UserModule,
    CompanyModule,
    FacilityModule,
    HospitalModule,
    CarehomeModule,
    OpenaiModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
