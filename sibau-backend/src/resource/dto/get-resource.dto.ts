import { IsOptional, IsNumber, Max, Min } from 'class-validator';
import { FilterColumns } from '../model/filtercolumn.model';
import { ResourceQuery } from '../model/resource.model';

export class GetResourceDto implements ResourceQuery {
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
