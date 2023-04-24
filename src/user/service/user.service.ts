import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  async getAllUserWithAllData(id: number): Promise<User | null> {
    const userWithFacility = await this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        facility: true,
      },
    });

    const hospital = await this.prisma.hospital.findUnique({
      where: {
        id: userWithFacility.facilityId,
      },
    });

    const carehome = await this.prisma.carehome.findUnique({
      where: {
        id: userWithFacility.facilityId,
      },
    });

    if (hospital) {
      const user = {
        ...userWithFacility,
        hospital: {
          ...hospital,
        },
      };
      return user;
    } else if (carehome) {
      const user = {
        ...userWithFacility,
        carehome: {
          ...carehome,
        },
      };
      return user;
    } else {
      return null;
    }
  }
  async getUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: Number(id) } });
  }
  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({
      data: data,
    });
  }
  async updateUser(data: User, id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      throw Error('User not found');
    }
    return this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: data,
    });
  }
  // async createUserWidthAlldata(postData: UsersWithAlldata) {}
  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
