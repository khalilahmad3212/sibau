import { FilterColumns } from './filtercolumn.model';

export interface EducationQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
