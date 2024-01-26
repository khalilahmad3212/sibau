import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateResourceTypeDto } from './create-resource-type.dto';

export class UpdateResourceTypeDto extends PartialType(CreateResourceTypeDto) {
  @IsString()
  Name: string;

  @IsString()
  Link: string;

  @IsNumber()
  DepartmentId: number;
}
