import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  @IsString()
  Title: string;

  @IsDate()
  Date: Date;

  @IsString()
  Descripiton: string;

  @IsString()
  Image: string;

  @IsNumber()
  Sort: number;

  @IsNumber()
  DepartmentId: number;
}
