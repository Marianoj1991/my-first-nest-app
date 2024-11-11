import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const age = parseInt(value.age.toString(), 10)

    if (isNaN(age)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST)
    }

    return {
      ...value,
      age
    };
  }
}
