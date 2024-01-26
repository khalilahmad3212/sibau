import { IsDate, IsNumber, IsString } from 'class-validator';
export class CreateAnnouncementDto {
  @IsString()
  Title: string;

  @IsString()
  File: string;

  @IsDate()
  StartDate: Date;

  @IsDate()
  EndDate: Date;

  @IsString()
  Description: string;

  @IsNumber()
  DepartmentId: number;
}
