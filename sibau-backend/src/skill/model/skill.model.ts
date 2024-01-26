import { FilterColumns } from './filtercolumn.model';

export interface SkillQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
