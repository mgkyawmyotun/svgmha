import { existsSync } from 'fs';
import { getSourceFromFile } from '../utils';
import { ErrorHandler } from './ErrorHandler';
import { BaseHandler } from './Handler';
const isValidPath = (path: string) => existsSync(path);
export class CommandHandler extends BaseHandler {
  constructor() {
    super(null);
  }

  handle({ file }: OptionsType) {
    const errorHandler = new ErrorHandler();
    if (!isValidPath(file)) {
      this.setNext(errorHandler);
      (this.next as ErrorHandler).handle({
        errorMessage: '(not a valid file path / cannot find path)',
        field: '-f ' + file,
      });
      return;
    }
    // if (!isValidPath(output)) {
    //   this.setNext(errorHandler);
    //   (this.next as ErrorHandler<FileValidError>)?.handle({
    //     errorMessage: '(not a valid file path / cannot find path)',
    //     field: '-o ' + output,
    //   });
    //   return;
    // }
    const fileContent = getSourceFromFile(file);
    return super.handle(fileContent);
  }
}
