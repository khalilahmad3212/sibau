import { Module } from '@nestjs/common';
import { RfqsService } from './rfqs.service';
import { RfqsController } from './rfqs.controller';
import { Rfq } from './entities/rfq.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Rfq])],

  controllers: [RfqsController],
  providers: [RfqsService],
})
export class RfqsModule {}
