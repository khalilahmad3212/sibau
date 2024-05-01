import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';
import { Transform } from 'class-transformer';

export class UpdateEmployeeProfileDto extends PartialType(CreateEmployeeDto) {
  @IsString()
  FirstName: string;

  @IsString()
  LastName: string;

  @IsString()
  Email: string;

  @IsString()
  Skills: string;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  Phd: boolean;

  @IsString()
  Image: string;

  @IsString()
  Biography: string;

  @IsString()
  Message: string;
}
