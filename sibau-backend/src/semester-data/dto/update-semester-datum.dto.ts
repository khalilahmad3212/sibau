import { PartialType } from '@nestjs/mapped-types';
import { CreateSemesterDatumDto } from './create-semester-datum.dto';

export class UpdateSemesterDatumDto extends PartialType(CreateSemesterDatumDto) {}
