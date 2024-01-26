import { IsString } from 'class-validator';

export class CreateMapResourceDto {
  @IsString()
  key: string;
  @IsString()
  value: string;
  @IsString()
  page: string;
  @IsString()
  description?: string;
}
