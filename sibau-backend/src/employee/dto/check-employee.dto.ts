import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateCheckDto {
  @IsString()
  FirstName: string;

  @IsString()
  LastName: string;
}
