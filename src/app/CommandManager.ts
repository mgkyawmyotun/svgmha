import { Command, Option } from 'commander';
export class CommandManager {
  private static command: Command;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  public static getInstance(): Command {
    if (!CommandManager.command) {
      CommandManager.command = new Command();
    }
    return CommandManager.command;
  }
  public static getOptions(): OptionsType {
    return this.getInstance().opts<OptionsType>();
  }
  public static intializeOptions() {
    this.getInstance()
      .addOption(new Option('-f, --file <filepath>', 'path to .svg file'))
      .addOption(new Option('-o, --output <filepath>', 'path to output file'))
      .addOption(
        new Option('-e, --extension <jsx,tsx>', 'format to output')
          .choices(['jsx', 'tsx'])
          .default('jsx', 'svgmha will complie jsx format by default')
      )
      .addOption(new Option('-c --class', 'complie to class format'))
      .addOption(new Option('-l --log', 'details about error'));
  }
}
