import { FilterColumns } from './filtercolumn.model';

export interface ProgramQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
