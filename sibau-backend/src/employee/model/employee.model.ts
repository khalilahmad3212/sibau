import { FilterColumns } from './filtercolumn.model';

export interface EmployeeQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
