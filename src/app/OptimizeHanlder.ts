import { BaseHandler } from './Handler';

export class OptimizeHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    console.log('optimize');
    return super.handle(source);
  }
}
