import prettier from 'prettier';
export function beautify(ugly: string) {
  const beauty = prettier.format(ugly, { parser: 'babel' });
  return beauty;
}
