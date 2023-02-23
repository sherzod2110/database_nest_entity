import { userCreateDto, userUpdateDto } from './dto/dto';
import { UsersService } from './../../service/users/users.service';
import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { Delete, Param, Put } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/get')
  getUsers() {
    return this.userService.findUsers();
  }

  @Post('/create')
  createUser(@Body() body: userCreateDto) {
    return this.userService.createUser(body);
  }

  @Put('/update/:id')
  updateUser(@Body() body: userUpdateDto, @Param('id') id: number) {
    return this.userService.updateUser(body, id);
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
