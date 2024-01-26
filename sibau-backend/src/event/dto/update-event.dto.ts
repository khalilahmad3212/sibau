import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsDate } from 'class-validator';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  @IsString()
  Title: string;

  @IsNumber()
  Cost: number;

  @IsString()
  OrganizorName: string;

  @IsString()
  OrganizorPhone: string;

  @IsString()
  OrganizorEmail: string;

  @IsDate()
  EndDate: Date;

  @IsDate()
  StartDate: Date;

  @IsString()
  EventType: string;

  @IsString()
  Image: string;

  @IsString()
  PosterImage: string;

  @IsString()
  Venue: string;

  @IsNumber()
  Sort: number;

  @IsString()
  EmbededCode: string;

  @IsNumber()
  DepartmentId: number;
}
