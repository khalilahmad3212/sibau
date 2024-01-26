import { IsString } from 'class-validator';

export class CreateDynamicPageDto {
  @IsString()
  name: string;

  @IsString()
  link: string;

  @IsString()
  content: string;
}
