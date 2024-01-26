import { IsString, IsNumber } from 'class-validator';

export class CreateEmployeeInfoDto {
  @IsString()
  employee: string; // Include the employeeId to identify which entity to update
  @IsString()
  biography: string;
  @IsString()
  qualifications: string;
  @IsString()
  publications: string;

  @IsString()
  coursesTaught: string;
  @IsString()
  overView: string;
}
