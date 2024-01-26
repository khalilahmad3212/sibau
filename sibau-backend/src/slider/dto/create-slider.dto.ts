import { SliderQuery } from './../model/slider.model';
import { IsOptional, IsString, IsNumber } from 'class-validator';
import { FilterColumns } from '../model/filtercolumn.model';

export class CreateSliderDto implements SliderQuery {
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
