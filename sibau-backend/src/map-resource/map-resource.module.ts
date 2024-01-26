import { Module } from '@nestjs/common';
import { MapResourceService } from './map-resource.service';
import { MapResourceController } from './map-resource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapResource } from './entities/map-resource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MapResource])],

  controllers: [MapResourceController],
  providers: [MapResourceService], // Include the MapResourceRepository as a provider
})
export class MapResourceModule {}
