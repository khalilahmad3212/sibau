import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { ResourceTypeService } from './resource-type.service';
import { ResourceTypeController } from './resource-type.controller';
import { ResourceType } from "./entities/resource-type.entity";

@Module({
  imports: [ TypeOrmModule.forFeature([ResourceType]) ],
  controllers: [ResourceTypeController],
  providers: [ResourceTypeService]
})
export class ResourceTypeModule {}
