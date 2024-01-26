import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateSpecializationDto } from './create-specialization.dto';

export class UpdateSpecializationDto extends PartialType(
  CreateSpecializationDto,
) {
  @IsString()
  Name: string;

  @IsNumber()
  ResourceId: number;
}
