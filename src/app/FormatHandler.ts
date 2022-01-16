import { format } from '../lib/stubs';
import { CommandManager } from './CommandManager';
import { BaseHandler } from './Handler';

export class FormatHandler extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    const { class: with_class, extension } = CommandManager.getOptions();
    const formated = format(
      source,
      with_class ? 'class' : 'function',
      extension
    );
    return super.handle(formated);
  }
}
