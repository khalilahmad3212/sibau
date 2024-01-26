import { Module } from '@nestjs/common';
import { DynamicPageService } from './dynamic-page.service';
import { DynamicPageController } from './dynamic-page.controller';
import { DynamicPage } from './entities/dynamic-page.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DynamicPage])],
  controllers: [DynamicPageController],
  providers: [DynamicPageService],
})
export class DynamicPageModule {}
