import { IsString, IsPhoneNumber, IsNumber, IsOptional } from 'class-validator';
export class CreateDepartmentDto {
  @IsString()
  Name: string;

  @IsString()
  Vision: string;

  @IsString()
  Mission: string;

  @IsString()
  Objectives: string;

  @IsString()
  History: string;

  @IsString()
  Description: string;

  @IsString()
  Accreditions: string;

  @IsString()
  Catagory: string;

  @IsString()
  Address: string;

  @IsString()
  Phone: string;

  @IsString()
  @IsOptional()
  Logo?: string;

  // @IsNumber()
  // OrganizationId: number;

  // @IsNumber()
  // HeadEmployeeId: number;
}
