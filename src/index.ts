import { Option } from 'commander';
import { CommandCenter } from './Command';
import { optimizeSvg } from './lib/optimizer';
import { getSourceFromFile } from './utils';
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
    new Option('-d, --drink <jsx,tsx>', 'drink size').choices(['jsx', 'tsx'])
  )
  .addOption(
    new Option('-t, --thread <number>', 'number of thread').default(1, 'one')
  );

command.action(() => {
  //   const parsed = parse(`
  // 	<svg viewBox='0 0 100 100' asdzx>
  //   <rect/>
  // 	</svg>
  // `);

  const { file } = command.opts() as any;
  const data = getSourceFromFile(file);
  optimizeSvg(data).then(x => console.log(x));
});
command.parse(); // controller.addCommand({})
