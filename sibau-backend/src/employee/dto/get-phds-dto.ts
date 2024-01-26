import { IsBoolean, IsOptional } from 'class-validator';

export class GetPhdsDto {
  @IsBoolean()
  @IsOptional()
  phd?: boolean;
}
