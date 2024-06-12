import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { Event } from "./entities/event.entity";
import { DepartmentModule } from "../department/department.module";

@Module({
  imports: [TypeOrmModule.forFeature([Event]), DepartmentModule],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule { }
