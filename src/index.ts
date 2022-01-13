import { Option } from 'commander';
import { CommandCenter } from './Command';
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
  );

command.action(async () => {
  //   const parsed = parse(`
  // 	<svg viewBox='0 0 100 100' asdzx>
  //   <rect/>
  // 	</svg>
  // `);

  const { file, output } = command.opts() as any;
  const data = getSourceFromFile(file);

  const optimizedSvg = await optimizeSvg(data);
  const parsedSvg = parse(optimizedSvg);

  const transformed = transform(parsedSvg.children[0]);
  const stringed = stringify(transformed);
  const formated = format(stringed, 'function', 'tsx');
  writeDataToFile(output, formated as string);

  console.log(formated);
});
command.parse(); // controller.addCommand({})
