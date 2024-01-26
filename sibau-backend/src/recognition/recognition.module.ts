import { Module } from '@nestjs/common';
import { RecognitionService } from './recognition.service';
import { RecognitionController } from './recognition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recognition } from './entities/recognition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recognition])],
  controllers: [RecognitionController],
  providers: [RecognitionService],
})
export class RecognitionModule {}
