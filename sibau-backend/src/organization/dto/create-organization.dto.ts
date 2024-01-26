import { IsNumber, IsString } from 'class-validator';
export class CreateOrganizationDto {
  @IsString()
  Name: string;

  @IsString()
  History: string;

  @IsString()
  Description: string;

  @IsString()
  Mission: string;

  @IsString()
  Vision: string;

  @IsString()
  Founder: string;

  @IsString()
  Logo: string;

  @IsNumber()
  VCEmployeeId: number;

  @IsNumber()
  RegistrarEmployeeId: number;
}
