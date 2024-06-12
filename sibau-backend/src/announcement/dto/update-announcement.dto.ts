import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsDate, IsNumber } from 'class-validator';
import { CreateAnnouncementDto } from './create-announcement.dto';

export class UpdateAnnouncementDto extends PartialType(CreateAnnouncementDto) {
  @IsString()
  Title: string;

  @IsString()
  File: string;

  @IsDate()
  StartDate: Date;

  @IsDate()
  EndDate: Date;

  @IsString()
  Description: string;

  @IsNumber()
  DepartmentId: number;
}
