import { stringify } from '../lib/stringfy';
import { BaseHandler } from './Handler';

export class StringfyHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    return super.handle(stringify(source));
  }
}
