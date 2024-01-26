import { FilterColumns } from './filtercolumn.model';

export interface OrganizationQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
