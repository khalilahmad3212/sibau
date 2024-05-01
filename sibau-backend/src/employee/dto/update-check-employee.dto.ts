import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateCheckEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsString()
  FirstName: string;

  @IsString()
  LastName: string;
}
