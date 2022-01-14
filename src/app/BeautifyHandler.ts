import { BaseHandler } from './Handler';

export class BeautifyHandler extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    console.log('beautify');
    return super.handle(source);
  }
}
