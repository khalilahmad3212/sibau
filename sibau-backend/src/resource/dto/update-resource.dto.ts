import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { Department } from '../../department/entities/department.entity';
import { CreateResourceDto } from './create-resource.dto';

export class UpdateResourceDto extends PartialType(CreateResourceDto) {
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
