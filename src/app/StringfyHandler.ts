import { BaseHandler } from './Handler';

export class StringfyHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    console.log('stringfy');
    return super.handle(source);
  }
}
