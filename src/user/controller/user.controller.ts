import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
  @Get('/all/:id')
  async getUserWithAllData(@Param('id') id: number): Promise<User | null> {
    return this.userService.getAllUserWithAllData(id);
  }
  @Post()
  async createUser(@Body() postData: User): Promise<User> {
    return this.userService.createUser(postData);
  }
  // @Post('/all')
  // async createUserWidthAlldata(
  //   @Body() postData: UsersWithAlldata,
  // ): Promise<UsersWithAlldata> {
  //   return this.userService.createUserWidthAlldata(postData);
  // }
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }
  @Put(':id')
  async Update(@Body() postData: User, @Param('id') id: number): Promise<User> {
    return this.userService.updateUser(postData, id);
  }
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
