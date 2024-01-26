import { IsNumber, IsString, isString } from 'class-validator';
export class CreateGalleryDto {
  @IsString()
  Name: string;

  @IsString()
  Type: string;

  @IsString()
  event?: string;

  @IsNumber()
  DepartmentId?: number;
}
