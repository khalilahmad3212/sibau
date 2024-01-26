import { FilterColumns } from './filtercolumn.model';

export interface SpecializationQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
