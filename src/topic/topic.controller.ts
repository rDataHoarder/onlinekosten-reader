import { Response, Controller, ForbiddenException, Get, Param, Query } from '@nestjs/common';
import { TopicService } from './topic.service';
import type { Response as ExpressResponse } from 'express';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get('/:id')
  async getTopicByID(@Param() params) {
    const topic = await this.topicService.find(params.id);
    return topic.raw;
  }
}
