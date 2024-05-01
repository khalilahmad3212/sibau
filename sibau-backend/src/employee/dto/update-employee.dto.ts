import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';
import { Transform } from 'class-transformer';

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

  @IsString()
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
  @IsOptional()
  Image: string;

  @IsString()
  CurrentStatus: string;

  @IsString()
  Message: string;

  @IsNumber()
  BPS: number;

  @Transform(({ obj, key }) => {
    return obj[key] === 'true' ? true : obj[key] === 'false' ? false : obj[key];
  })
  @IsBoolean()
  Phd?: boolean;

  @IsNumber()
  Department: number;
}
