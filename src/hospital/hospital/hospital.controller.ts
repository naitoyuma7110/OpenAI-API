import { Controller, Get, Param } from '@nestjs/common';
import { Hospital } from '.prisma/client';
import { HospitalService } from './hospital.service';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}
  @Get()
  async findAll(): Promise<Hospital[]> {
    return await this.hospitalService.findAll();
  }
  @Get('search/:keyword')
  async findByKeyword(@Param('keyword') keyword: string): Promise<Hospital[]> {
    const param = decodeURIComponent(keyword);
    return await this.hospitalService.findByKeyword(param);
  }
}
