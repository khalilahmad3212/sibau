import { FilterColumns } from './filtercolumn.model';

export interface PublicationQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
