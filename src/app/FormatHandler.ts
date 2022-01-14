import { BaseHandler } from './Handler';

export class FormatHandler extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    console.log('format');
    return super.handle(source);
  }
}
