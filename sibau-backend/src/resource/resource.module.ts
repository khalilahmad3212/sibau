import { Resource } from "src/resource/entities/resource.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ Resource ])],
  controllers: [ResourceController],
  providers: [ResourceService]
})
export class ResourceModule {}
