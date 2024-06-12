import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { Employee } from '../../employee/entities/employee.entity';
import { CreateOrganizationDto } from './create-organization.dto';

export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {
  @IsString()
  Name: string;

  @IsString()
  History: string;

  @IsString()
  Description: string;

  @IsString()
  Mission: string;

  @IsString()
  Vision: string;

  @IsString()
  Founder: string;

  @IsString()
  Logo: string;

  @IsNumber()
  VCEmployeeId: number;

  @IsNumber()
  RegistrarEmployeeId: number;
}
