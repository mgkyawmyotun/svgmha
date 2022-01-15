import chalk from 'chalk';
import { CommandManager } from './CommandManager';
import { BaseHandler } from './Handler';

export class ErrorHandler extends BaseHandler {
  constructor() {
    super(null);
  }

  handle(error: any) {
    //     const c = new chalk.Chalk();
    console.log(
      chalk.greenBright(error.field) + ' ' + chalk.red(error.errorMessage)
    );
    const { log } = CommandManager.getOptions();
    if (log) {
      console.log(chalk.redBright(JSON.stringify(error, null, 2)));
    } else {
      console.log(
        chalk.whiteBright('use --log options to get more about error')
      );
    }

    return;
  }
}
