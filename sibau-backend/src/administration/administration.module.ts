import { Module } from '@nestjs/common';
import { AdministrationController } from './administration.controller';
import { AdministrationService } from './administration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administration } from './entities/administration/administration';

@Module({
  imports: [TypeOrmModule.forFeature([Administration])],
  controllers: [AdministrationController],
  providers: [AdministrationService],
})
export class AdministrationModule { }
