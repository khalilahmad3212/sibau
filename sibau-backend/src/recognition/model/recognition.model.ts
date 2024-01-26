import { FilterColumns } from './filtercolumn.model';

export interface ResourceQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;

  Organization: string;
}
