import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateProgramDto } from './create-program.dto';

export class UpdateProgramDto extends PartialType(CreateProgramDto) {
  @IsString()
  Name: string;

  @IsString()
  Duration: string;

  @IsString()
  Description: string;

  @IsString()
  Coordinator: string;

  @IsString()
  Link: string;

  @IsNumber()
  FocalPersonEmployeeId: number;
}
