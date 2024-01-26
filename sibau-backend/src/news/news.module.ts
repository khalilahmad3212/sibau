import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { News } from "./entities/news.entity";

@Module({
  imports:[TypeOrmModule.forFeature([News])],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}