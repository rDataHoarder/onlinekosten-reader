export class InitTopic {
  topic: number;
}

export class StoreTopic {
  id: string;
  topic: number;
  page: number;
  raw: string;
  meta: string;
}

export class StoreRedirect {
  id: string;
  to: number;
}
