import { Command } from 'commander';
import { version } from '../package.json';
export class CommandCenter {
  private static commandcenter: null | Command = null;
  public static createCommandCenter() {
    if (this.commandcenter == null) {
      this.commandcenter = new Command('svgmha');
    }
    this.commandcenter.version(version);
    return this.commandcenter;
  }
}
