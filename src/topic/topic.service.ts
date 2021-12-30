import { Injectable } from '@nestjs/common';
import { Topic } from './topic.entity';
import { TopicRepository } from './topic.repository';

@Injectable()
export class TopicService {
  constructor(private readonly topicRepository: TopicRepository) {}

  async find(topic: string): Promise<Topic> {
    return this.topicRepository.findOne({
      id: topic,
    });
  }
}
