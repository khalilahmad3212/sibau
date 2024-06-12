import { IsString } from 'class-validator';
import { Department } from '../../department/entities/department.entity';

export class CreateResourceDto {
  @IsString()
  Name: string;

  @IsString()
  ShortName: string;

  @IsString()
  Link: string;

  @IsString()
  AltText: string;

  @IsString()
  LinkLocation: string;

  Department: Department;
}
