import { parse } from '../lib/parser';
import { BaseHandler } from './Handler';

export class ParseHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    try {
      const parsed = parse(source);
      console.log(parsed);
    } catch (error) {}
    return super.handle(source);
  }
}
