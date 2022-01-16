import { BeautifyHandler } from './BeautifyHandler';
import { CommandHandler } from './CommandHandler';
import { FormatHandler } from './FormatHandler';
import { OptimizeHanlder } from './OptimizeHanlder';
import { OutputHandler } from './OutputHandler';
import { ParseHanlder } from './ParseHandler';
import { StringfyHanlder } from './StringfyHandler';
import { TransformHanlder } from './TransformHandler';
export class MainHandler {
  constructor() {}
  handle(opts: OptionsType) {
    const commandHandler = new CommandHandler();
    const optimizeHandler = new OptimizeHanlder();
    const parseHandler = new ParseHanlder();
    const transformHandler = new TransformHanlder();
    const stringfyHandler = new StringfyHanlder();
    const formatHandler = new FormatHandler();
    const beautifyHandler = new BeautifyHandler();
    const outputHandler = new OutputHandler();
    commandHandler
      .setNext(optimizeHandler)
      .setNext(parseHandler)
      .setNext(transformHandler)
      .setNext(stringfyHandler)
      .setNext(formatHandler)
      .setNext(beautifyHandler)
      .setNext(outputHandler);

    commandHandler.handle(opts);
  }
}
