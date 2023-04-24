import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Carehome } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CarehomeService {
  async findAll(): Promise<Carehome[]> {
    return await prisma.carehome.findMany();
  }
  async findByKeyword(keyword: string): Promise<Carehome[] | null> {
    return await prisma.carehome.findMany({
      where: {
        name: {
          contains: keyword,
        },
      },
    });
  }
}
