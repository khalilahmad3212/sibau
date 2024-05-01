import { IsNumber, IsString, isString } from 'class-validator';
export class CreateGalleryDto {
  @IsString()
  Name: string;

  @IsString()
  Type: string;

  @IsString()
  AltText?: string;

  @IsString()
  Page?: string;

  @IsNumber()
  DepartmentId?: number;
}
