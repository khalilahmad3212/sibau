import { FilterColumns } from './filtercolumn.model';

export interface EventQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
