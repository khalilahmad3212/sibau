import { IsDate, IsNumber } from 'class-validator';
import { IsString } from 'class-validator';

export class CreatePublicationDto {
  @IsString()
  Title: string;

  @IsString()
  Authors: string;

  @IsString()
  Link: string;

  @IsDate()
  Year: Date;

  @IsString()
  JounalName: string;

  @IsString()
  Type: string;

  @IsNumber()
  EmployeeId?: number;
}
