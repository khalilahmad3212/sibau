import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { Gallery } from "./entities/gallery.entity";

@Module({
  imports: [ TypeOrmModule.forFeature([Gallery]) ],
  controllers: [GalleryController],
  providers: [GalleryService]
})
export class GalleryModule {}
