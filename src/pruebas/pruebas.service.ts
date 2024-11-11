import { Injectable } from '@nestjs/common';

@Injectable()
export class PruebasService {
  index() {
    return {
      id: 1,
      name: 'Pruebas Texto',
      content: 'Este es el contenido del objeto'
    } 
      
  };
}
