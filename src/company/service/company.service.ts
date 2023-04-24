import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { Company } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CompanyService {
  async findAll(): Promise<Company[]> {
    return await prisma.company.findMany();
  }

  async findByKeyword(keyword: string): Promise<Company[]> {
    if (keyword == '' || !keyword) {
      return await prisma.company.findMany();
    } else {
      return await prisma.company.findMany({
        where: {
          name: {
            contains: keyword,
          },
        },
      });
    }
  }

  async findOne(id: number): Promise<Company | null> {
    return await prisma.company.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.CompanyCreateInput): Promise<Company> {
    return await prisma.company.create({
      data,
    });
  }

  async update(id: number, data: Prisma.CompanyUpdateInput): Promise<Company> {
    return await prisma.company.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Company> {
    return await prisma.company.delete({
      where: { id },
    });
  }
}
