import { BaseHandler } from './Handler';

export class CommandHandler extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    console.log('from command');
    return super.handle(source);
  }
}
