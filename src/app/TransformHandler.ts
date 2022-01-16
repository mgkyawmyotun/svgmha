import { transform } from '../lib/transformer';
import { BaseHandler } from './Handler';

export class TransformHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    return super.handle(transform(source));
  }
}
