import { beautify } from '../lib/beautify';
import { ErrorHandler } from './ErrorHandler';
import { BaseHandler } from './Handler';

export class BeautifyHandler extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    try {
      const beauty = beautify(source);
      return super.handle(beauty);
    } catch (error) {
      this.setNext(new ErrorHandler());
      (this.next as ErrorHandler).handle({
        errorMessage: 'error at formating file',
        field: 'prettier',
        source: JSON.stringify(error),
      });
      return;
    }
  }
}
