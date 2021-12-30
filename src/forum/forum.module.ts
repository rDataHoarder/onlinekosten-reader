import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Topic } from '../topic/topic.entity';
import { TopicService } from '../topic/topic.service';
import { ForumController } from './forum.controller';

@Module({
  controllers: [ForumController],
  exports: [TopicService],
  imports: [MikroOrmModule.forFeature({ entities: [Topic] })],
  providers: [TopicService],
})
export class ForumModule {}
