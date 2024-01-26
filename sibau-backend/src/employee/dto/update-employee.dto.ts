import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsString()
  FirstName: string;

  @IsString()
  LastName: string;

  @IsString()
  Designation: string;

  @IsString()
  Email: string;

  @IsString()
  CMS_id: string;

  @IsNumber()
  EmployeeId: string;

  @IsString()
  OfficeExtension: string;

  @IsString()
  OfficeAddress: string;

  @IsString()
  Type: string;

  @IsString()
  Skills: string;

  @IsString()
  Biography: string;

  @IsString()
  Image: string;

  @IsString()
  CurrentStatus: string;

  @IsString()
  Message: string;

  @IsNumber()
  BPS: number;

  @IsNumber()
  Department: number;
}
