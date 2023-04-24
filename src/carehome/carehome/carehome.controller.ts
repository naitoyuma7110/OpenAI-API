import { Controller, Get, Param } from '@nestjs/common';
import { CarehomeService } from './carehome.service';
import { Carehome } from '@prisma/client';

@Controller('carehome')
export class CarehomeController {
  constructor(private readonly carehomeService: CarehomeService) {}
  @Get()
  async findAll(): Promise<Carehome[]> {
    return await this.carehomeService.findAll();
  }
  @Get('search/:keyword')
  async findByKeyword(@Param('keyword') keyword: string): Promise<Carehome[]> {
    const param = decodeURIComponent(keyword);
    return await this.carehomeService.findByKeyword(param);
  }
}
