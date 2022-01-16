import { parse } from '../lib/parser';
import { ErrorHandler } from './ErrorHandler';
import { BaseHandler } from './Handler';

export class ParseHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    try {
      const parsed = parse(source);
      return super.handle(parsed.children[0]);
    } catch (error) {
      this.setNext(new ErrorHandler());
      (this.next as ErrorHandler).handle({
        errorMessage: 'error at parsing svg file',
        field: 'parse',
        source: error,
      });
      return;
    }
  }
}
