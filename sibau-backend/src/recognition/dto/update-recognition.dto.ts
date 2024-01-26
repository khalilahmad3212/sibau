import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsDate, IsNumber } from 'class-validator';
import { CreateRecognitionDto } from './create-recognition.dto';

export class UpdateRecognitionDto extends PartialType(CreateRecognitionDto) {
  @IsString()
  Title: string;

  @IsString()
  Designation: string;

  @IsString()
  Link: string;

  @IsString()
  Organization: string;

  @IsString()
  Type: string;

  @IsDate()
  StartDate: Date;

  @IsDate()
  EndDate: Date;

  @IsNumber()
  EmployeeId: number;
}
