import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateRecognitionDto {
  @IsString()
  Title: string;

  @IsString()
  Designation: string;

  @IsString()
  Link: string;

  @IsString()
  Organization: string;

  @IsString()
  Type: string;

  @IsDate()
  StartDate: Date;

  @IsDate()
  EndDate: Date;

  @IsNumber()
  EmployeeId: number;
}
