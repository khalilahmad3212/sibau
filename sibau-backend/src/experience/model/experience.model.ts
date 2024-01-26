import { FilterColumns } from './filtercolumn.model';

export interface ExperienceQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
