import { IsOptional, IsString } from 'class-validator';

export class CreateMapResourceDto {
  @IsString()
  key: string;
  @IsString()
  value: string;

  @IsString()
  @IsOptional()
  page: string;

  @IsString()
  @IsOptional()
  description?: string;
}
