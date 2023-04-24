import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CompanyService } from '../service/company.service';
import { Prisma, Company } from '@prisma/client';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async findAll(): Promise<Company[]> {
    return await this.companyService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<Company | null> {
  //   return await this.companyService.findOne(Number(id));
  // }

  @Get('/search/:keyword')
  async findByKeyword(
    @Param('keyword') keyword: string,
  ): Promise<Company[] | null> {
    const param = decodeURIComponent(keyword);
    return await this.companyService.findByKeyword(param);
  }

  @Post()
  async create(@Body() data: Prisma.CompanyCreateInput): Promise<Company> {
    return await this.companyService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.CompanyUpdateInput,
  ): Promise<Company> {
    return await this.companyService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Company> {
    return await this.companyService.delete(Number(id));
  }
}
