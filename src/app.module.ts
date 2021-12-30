import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TopicModule } from './topic/topic.module';
import { ForumModule } from './forum/forum.module';

@Module({
  imports: [MikroOrmModule.forRoot(), TopicModule, ForumModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
