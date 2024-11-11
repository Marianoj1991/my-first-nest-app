import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create.user.dto';

  // export interface User {
  //   nombre: string,
  //   apellido: string,
  //   edad: number,
  //   mail: string
  // }

@Injectable()
export class UsersService {

    private users: createUserDto[] = []

  getUsers(): createUserDto[] {
    return this.users;
  }

  postUser(body: createUserDto): createUserDto {
    this.users.push({
      ...body,
      id: this.users.length + 1
    })

    return this.users[this.users.length - 1]
  }

  putUser(): createUserDto {
    return this.users[1]
  }

  deleteUser(): string {
    return `Usuario eliminado ${JSON.stringify(this.users[2])}`
  }

}
