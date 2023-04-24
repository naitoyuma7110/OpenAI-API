import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './controller/user.controller';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
