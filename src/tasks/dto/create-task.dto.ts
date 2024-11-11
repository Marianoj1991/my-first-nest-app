// USANDO VALIDACIONES PROPIAS DE NEST, QUE NOS DAN MAYOR CONTROL

import { IsNumber, IsString, IsNotEmpty } from 'class-validator'

export class createTaskDto {
  @IsNumber()
  @IsNotEmpty() 
  id: number;
  
  @IsString() 
  @IsNotEmpty() 
  title: string;
  
  @IsString() 
  @IsNotEmpty() 
  desc: string;
}

// ESTO ES USANDO INTERFACES 
// export interface Task {
//   id: number;
//   title: string;
//   desc: string;
// }
