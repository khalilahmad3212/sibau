import { FilterColumns } from './filtercolumn.model';

export interface AnnouncementQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
