import { IsDate, IsNumber } from 'class-validator';
import { IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsDate()
  StartDate: Date;

  @IsDate()
  EndDate: Date;

  @IsString()
  Position: string;

  @IsString()
  Organization: string;

  @IsNumber()
  EmployeeId: number;
}
