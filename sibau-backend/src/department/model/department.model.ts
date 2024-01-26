import { FilterColumns } from './filtercolumn.model';

export interface DepartmentQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
