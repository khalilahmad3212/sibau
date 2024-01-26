import { IsOptional, IsNumber, Max, Min } from 'class-validator';
import { FilterColumns } from '../model/filtercolumn.model';
import { SkillQuery } from '../model/skill.model';

export class GetSkillDto implements SkillQuery {
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
