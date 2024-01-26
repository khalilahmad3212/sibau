import { PartialType } from '@nestjs/mapped-types';
import { CreateFileDatumDto } from './create-file-datum.dto';

export class UpdateFileDatumDto extends PartialType(CreateFileDatumDto) {}
