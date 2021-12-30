import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/sqlite';
import { Topic } from './topic.entity';

@Repository(Topic)
export class TopicRepository extends EntityRepository<Topic> {}
