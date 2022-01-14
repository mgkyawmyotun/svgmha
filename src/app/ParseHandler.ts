import { BaseHandler } from './Handler';

export class ParseHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    console.log('parser');
    return super.handle(source);
  }
}
