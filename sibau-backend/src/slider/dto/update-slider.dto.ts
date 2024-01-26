import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { FilterColumns } from '../model/filtercolumn.model';
import { CreateSliderDto } from './create-slider.dto';

export class UpdateSliderDto extends PartialType(CreateSliderDto) {
  @IsString()
  Title: string;

  @IsString()
  Headings: string;

  @IsString()
  Link: string;

  @IsString()
  LinkTitle: string;

  @IsString()
  Image: string;

  @IsOptional()
  @IsString()
  Filter?: FilterColumns;

  @IsOptional()
  @IsNumber()
  Limit?: number;

  @IsOptional()
  @IsNumber()
  Page?: number;
}
