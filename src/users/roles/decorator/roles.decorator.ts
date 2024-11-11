// import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';

export const Roles = ( ...roles: string[] ) => SetMetadata('roles', roles)
// export const Roles = Reflector.createDecorator<string[]>();


 