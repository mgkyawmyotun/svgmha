import * as Svgo from 'svgo';

export async function optimizeSvg(svgString: string) {
  const result = Svgo.optimize(svgString, {
    multipass: true,
    //     plugins: [...(PLUGINS as any)],
    path: './test.svg',
    full: true,
    plugins: [
      {
        name: 'preset-default',

        params: {
          overrides: {
            // customize default plugin options
            //     removeViewBox: true,
            // or disable plugins
            inlineStyles: {},
          },
        },
      },
    ],
  });
  return (result as any).data as string;
}
