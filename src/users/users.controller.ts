import { Body, Controller, Delete, Get, Post, Put, UseGuards,  } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create.user.dto';
import { RolesGuard } from './guard/roles/roles.guard';
import { Roles } from './roles/decorator/roles.decorator';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {

  constructor(private usersService: UsersService){}

  @Get()
  getUsers(): createUserDto[] {
    return this.usersService.getUsers();
  }

  @Post()
  @Roles('admin')
  postUser(@Body() body: createUserDto) {
    console.log('USER POSTED')
    return this.usersService.postUser(body);
  }

  @Put()
  putUser(): createUserDto {
    return this.usersService.putUser();
  }

  @Delete()
  deleteUser(): string {
    return this.usersService.deleteUser();
  }

}
