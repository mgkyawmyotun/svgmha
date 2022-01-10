import { Option } from 'commander';
import { CommandCenter } from './Command';
import { parse } from './lib/parser';
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
  const parsed = parse(`
	<svg viewBox='0 0 100 100' asdzx>
  <rect/>
	</svg>
`);
  console.log(parsed);
});
command.parse(); // controller.addCommand({})
