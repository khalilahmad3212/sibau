import { SliderQuery } from './../model/slider.model';
import { IsOptional, IsNumber, Max, Min } from 'class-validator';
import { FilterColumns } from '../model/filtercolumn.model';

export class GetSliderDto implements SliderQuery {
  @IsOptional()
  Filter?: FilterColumns;

  @IsOptional()
  @IsNumber()
  @Min(1) // Minimum value for Limit property
  @Max(100) // Maximum value for Limit property
  Limit?: number;

  @IsOptional()
  @IsNumber()
  Page?: number;
}
