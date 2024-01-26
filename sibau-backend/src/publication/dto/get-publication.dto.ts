import { PublicationQuery } from '../model/publication.model';
import { IsOptional, IsNumber, Max, Min } from 'class-validator';
import { FilterColumns } from '../model/filtercolumn.model';

export class GetPublicationDto implements PublicationQuery {
  @IsOptional()
  Filter?: FilterColumns;

  @IsOptional()
  @IsNumber()
  @Min(1) 
  @Max(100) 
  Limit?: number;

  @IsOptional()
  @IsNumber()
  Page?: number;
}
