import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { CreateExperienceDto } from './create-experience.dto';

export class UpdateExperienceDto extends PartialType(CreateExperienceDto) {
  @IsDate()
  StartDate: Date;

  @IsDate()
  EndDate: Date;

  @IsString()
  Position: string;

  @IsString()
  Organization: string;

  @IsNumber()
  EmployeeId: number;
}
