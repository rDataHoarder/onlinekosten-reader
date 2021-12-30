import { Response, Controller, ForbiddenException, Get, Query } from '@nestjs/common';
import { TopicService } from '../topic/topic.service';
import type { Response as ExpressResponse } from 'express';

@Controller('forum')
export class ForumController {
  constructor(private readonly topicService: TopicService) {}

  @Get('/showthread.php')
  async getTopicWithQueryParams(@Query() query, @Response() res: ExpressResponse) {
    if (!query.t) throw new ForbiddenException();
    const id = query.t + ':' + (query.page || 1);
    const topic = await this.topicService.find(id);
    if (topic.redirectTo) {
      return res.redirect('/forum/showthread.php?t=' + topic.redirectTo);
    }
    return res.send(topic.raw);
  }
}
