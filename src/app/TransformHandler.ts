import { BaseHandler } from './Handler';

export class TransformHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    console.log('transform');
    return super.handle(source);
  }
}
