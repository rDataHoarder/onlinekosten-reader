import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Topic {
  // Key is topic:page
  @PrimaryKey({ type: 'string' })
  id: string;

  @Property()
  topic: number;

  @Property()
  page: number;

  @Property({ default: false })
  locked: boolean;

  @Property({ default: false })
  stored: boolean;

  @Property({ nullable: true })
  raw: string;

  @Property({ nullable: true })
  meta: string;

  @Property({ nullable: true })
  redirectTo: number;

  @Property({ type: 'Date' })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date(), type: 'Date' })
  updatedAt: Date = new Date();
}
