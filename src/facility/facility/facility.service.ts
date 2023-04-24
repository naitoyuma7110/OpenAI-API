import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { Facility } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FacilityService {
  async findAll(): Promise<Facility[]> {
    return await prisma.facility.findMany({});
  }

  async findByKeyword(keyword: string): Promise<Facility[]> {
    return prisma.facility.findMany({
      where: {
        name: {
          contains: keyword,
        },
      },
    });
  }

  async findOne(id: number): Promise<Facility | null> {
    return await prisma.facility.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.FacilityCreateInput): Promise<Facility> {
    return await prisma.facility.create({
      data,
    });
  }

  async update(
    id: number,
    data: Prisma.FacilityUpdateInput,
  ): Promise<Facility> {
    return await prisma.facility.update({
      where: { id },
      data,
    });
  }
}
