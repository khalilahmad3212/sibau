import { IsBoolean, IsNumber, IsString } from 'class-validator';
export class CreateEmployeeDto {
  @IsString()
  FirstName: string;

  @IsString()
  LastName: string;

  @IsString()
  Designation: string;

  @IsString()
  Email: string;

  @IsString()
  CMS_id: string;
  @IsString()
  EmployeeId: string;

  @IsString()
  OfficeExtension: string;

  @IsString()
  OfficeAddress: string;

  @IsString()
  Type: string;

  @IsString()
  Skills: string;

  @IsString()
  Biography: string;

  @IsString()
  Image: string;

  @IsBoolean()
  Phd?: boolean;

  @IsString()
  CurrentStatus: string;

  @IsString()
  Message: string;

  @IsNumber()
  BPS: number;

  @IsNumber()
  Department: number;
}
