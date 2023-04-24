import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { Prisma, Facility } from '@prisma/client';

@Controller('facility')
export class FacilityController {
  constructor(private readonly facilityService: FacilityService) {}

  @Get()
  async findAll(): Promise<Facility[]> {
    return await this.facilityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Facility | null> {
    return await this.facilityService.findOne(Number(id));
  }

  @Get('/search/:keyword')
  async findByKeyword(
    @Param('keyword') keyword: string,
  ): Promise<Facility[] | null> {
    const param = decodeURIComponent(keyword);
    return await this.facilityService.findByKeyword(param);
  }

  @Post()
  async create(@Body() data: Prisma.FacilityCreateInput): Promise<Facility> {
    return await this.facilityService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.FacilityUpdateInput,
  ): Promise<Facility> {
    return await this.facilityService.update(Number(id), data);
  }
}
