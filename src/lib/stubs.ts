const TEMPLATES: { [key: string]: (source: string) => string } = {
  typescript_function: (source: string) => `
export function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (${source});
}`,
  typescript_class: (source: string) => `
function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (${source});
	`,
  javascript_function: (source: string) => `
function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (${source});
	`,
  javascript_class: (source: string) => `
function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (${source});
	`,
};
export const format = (
  source: string,
  format: 'function' | 'class',
  lang: 'tsx' | 'jsx'
) => {
  if (lang == 'tsx') {
    return TEMPLATES['typescript_' + format](source);
  }
  if (format == 'function') {
  }
  return;
};
