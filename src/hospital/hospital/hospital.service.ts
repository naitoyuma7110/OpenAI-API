import { Injectable } from '@nestjs/common';
import { Hospital, PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HospitalService {
  async findAll(): Promise<Hospital[]> {
    return await prisma.hospital.findMany({});
  }
  async findByKeyword(keyword: string): Promise<Hospital[] | null> {
    return await prisma.hospital.findMany({
      where: {
        name: {
          contains: keyword,
        },
      },
    });
  }
}
