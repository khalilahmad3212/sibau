import { IsString, IsOptional, IsNumber } from 'class-validator';
import { Department } from 'src/department/entities/department.entity';

export class CreateDepartSpecializationDto {
  @IsString()
  Name: string;

  @IsString()
  ShortName: string;

  @IsString()
  Link: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  Content?: string;

  @IsString()
  @IsOptional()
  Desc?: string;

  @IsNumber()
  Department: number;
}
