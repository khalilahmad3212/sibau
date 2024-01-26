import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateGalleryDto } from './create-gallery.dto';

export class UpdateGalleryDto extends PartialType(CreateGalleryDto) {
  @IsString()
  Name: string;

  @IsString()
  AltText: string;

  @IsString()
  Type: string;

  @IsNumber()
  DepartmentId: number;
}
