import { Module } from '@nestjs/common';
import { DeptwiseProgramSpecailzationService } from './deptwise-program-specailzation.service';
import { DeptwiseProgramSpecailzationController } from './deptwise-program-specailzation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deptwiseprogramspecilization } from './entities/deptwise-program-specailzation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deptwiseprogramspecilization])],
  controllers: [DeptwiseProgramSpecailzationController],
  providers: [DeptwiseProgramSpecailzationService],
})
export class DeptwiseProgramSpecailzationModule {}
