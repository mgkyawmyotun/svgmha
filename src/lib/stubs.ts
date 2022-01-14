import { addPropsToElement } from '../utils';

const TEMPLATES: { [key: string]: (source: string) => string } = {
  typescript_function: (source: string) => `
  import React from 'react';
export function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (${addPropsToElement(source, 'function')});
}`,
  typescript_class: (source: string) => `
  import React from 'react';
function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (${addPropsToElement(source, 'class')});
}
	`,
  javascript_function: (source: string) => `
  import React from 'react';
export function Icon(props) {
  return (${addPropsToElement(source, 'function')});
}
	`,
  javascript_class: (source: string) => `
  import React from 'react'
export class Icon extends React.Component{
  render(){
  return (${addPropsToElement(source, 'class')});
  }
}
	`,
};
export const format = (
  source: string,
  format: 'function' | 'class',
  lang: 'tsx' | 'jsx'
) => {
  if (lang === 'tsx') {
    return TEMPLATES['typescript_' + format](source);
  }
  if (lang === 'jsx') {
    return TEMPLATES['javascript_' + format](source);
  }
  return;
};
