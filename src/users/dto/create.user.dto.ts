import { IsNotEmpty, IsString, IsNumber, IsEmail  } from 'class-validator'

export class createUserDto {
  
  id: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;
  
  @IsNotEmpty()
  @IsString()
  apellido: string;
  
  @IsNotEmpty()
  @IsNumber()
  edad: number;
  
  @IsNotEmpty()
  @IsEmail()
  mail: string
  
  
  @IsNotEmpty()
  @IsString()
  role: string
}