import { FilterColumns } from './filtercolumn.model';

export interface NewsQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
