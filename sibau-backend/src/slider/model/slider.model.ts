import { FilterColumns } from './filtercolumn.model';

export interface SliderQuery {
  Filter?: FilterColumns;

  Limit?: number;

  Page?: number;
}
