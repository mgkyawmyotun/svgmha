import { Option } from 'commander';
import { CommandCenter } from './Command';
import { beautify } from './lib/beautify';
import { optimizeSvg } from './lib/optimizer';
import { parse } from './lib/parser';
import { stringify } from './lib/stringfy';
import { format } from './lib/stubs';
import { transform } from './lib/transformer';
import { getSourceFromFile, writeDataToFile } from './utils';
const command = CommandCenter.createCommandCenter();
command
  .addOption(
    new Option('-f, --file <filepath>', 'path to .svg file').default(
      './',
      'current directory'
    )
  )
  .addOption(
    new Option('-o, --output <filepath>', 'path to output file').default(
      './',
      'current directory'
    )
  )

  .addOption(
    new Option('-e, --extension <jsx,tsx>', 'drink size').choices([
      'jsx',
      'tsx',
    ])
  )
  .addOption(
    new Option('-t, --thread <number>', 'number of thread').default(1, 'one')
  )
  .addOption(new Option('-c --class', 'complie to class format'));

command.action(async () => {
  const { file, output, extension, class: with_class } = command.opts() as any;
  console.log(with_class);

  const data = getSourceFromFile(file);
  const optimizedSvg = await optimizeSvg(data);
  const parsedSvg = parse(optimizedSvg);
  const transformed = transform(parsedSvg.children[0]);
  const stringed = stringify(transformed);
  const formated = format(
    stringed,
    with_class ? 'class' : 'function',
    extension
  );
  const beauty = beautify(formated || '');
  writeDataToFile(output, beauty as string);
});
command.parse(); // controller.addCommand({})
