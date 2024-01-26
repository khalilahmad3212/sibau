import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { CreateDepartmentDto } from './create-department.dto';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
  @IsString()
  Name: string;

  @IsString()
  Vision: string;

  @IsString()
  Mission: string;

  @IsString()
  Objectives: string;

  @IsString()
  History: string;

  @IsString()
  Description: string;

  @IsString()
  Accreditions: string;

  @IsString()
  Catagory: string;

  @IsString()
  Address: string;

  @IsPhoneNumber()
  Phone: string;

  @IsString()
  Logo: string;

  @IsNumber()
  OrganizationId: number;

  @IsNumber()
  HeadEmployeeId: number;
}
