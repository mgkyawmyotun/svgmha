import { CommandManager } from './app/CommandManager';
import { MainHandler } from './app/index';
const command = CommandManager.getInstance();
CommandManager.intializeOptions();

command.action(async () => {
  // const {
  //   file,
  //   output,
  //   extension,
  //   class: with_class,
  // } = command.opts<OptionsType>();

  const handler = new MainHandler();
  handler.handle(command.opts<OptionsType>());
  // commandHandler.setNext()

  // const data = getSourceFromFile(file);
  // const optimizedSvg = await optimizeSvg(data);
  // const parsedSvg = parse(optimizedSvg);
  // const transformed = transform(parsedSvg.children[0]);
  // const stringed = stringify(transformed);
  // const formated = format(
  //   stringed,
  //   with_class ? 'class' : 'function',
  //   extension
  // );
  // const beauty = beautify(formated || '');
  // writeDataToFile(output, beauty as string);
});
command.parse(); // controller.addCommand({})
