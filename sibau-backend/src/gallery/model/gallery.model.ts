import { FilterColumns } from './filtercolumn.model';

export interface GalleryQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
