import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Topic } from './topic.entity';
import { TopicController } from './topic.controller';
import { TopicService } from './topic.service';

@Module({
  controllers: [TopicController],
  exports: [TopicService],
  imports: [MikroOrmModule.forFeature({ entities: [Topic] })],
  providers: [TopicService],
})
export class TopicModule {}
