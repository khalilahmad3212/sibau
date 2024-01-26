import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { CreatePublicationDto } from './create-publication.dto';

export class UpdatePublicationDto extends PartialType(CreatePublicationDto) {
  @IsString()
  Title: string;

  @IsString()
  Authors: string;

  @IsString()
  Link: string;

  @IsDate()
  Year: Date;

  @IsString()
  JounalName: string;

  @IsString()
  Type: string;

  @IsNumber()
  EmployeeId: number;
}
