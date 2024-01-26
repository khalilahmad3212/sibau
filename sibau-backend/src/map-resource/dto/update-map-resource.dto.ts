import { PartialType } from '@nestjs/mapped-types';
import { CreateMapResourceDto } from './create-map-resource.dto';

export class UpdateMapResourceDto extends PartialType(CreateMapResourceDto) {}
