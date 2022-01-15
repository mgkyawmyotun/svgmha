import { optimizeSvg } from '../lib/optimizer';
import { ErrorHandler } from './ErrorHandler';
import { BaseHandler } from './Handler';

export class OptimizeHanlder extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    const optimized = optimizeSvg(source);
    if (optimized.error) {
      this.setNext(new ErrorHandler());
      (this.next as ErrorHandler).handle({
        errorMessage: '(error at optimizing svg file)',
        field: 'optimize ',
        source: optimized,
      });
      return;
    }
    return super.handle((optimized as any).data);
  }
}
