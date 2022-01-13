import { isPlainObject, isString } from '../utils';

function stringifyStyle(style: any) {
  const proprietyNames = Object.keys(style);
  return proprietyNames.reduce((accumulator, proprietyName) => {
    const propriety = style[proprietyName];
    const isStringPropriety = isString(propriety);
    if (isStringPropriety) {
      return accumulator + `${proprietyName}: "${propriety}", `;
    }

    return accumulator + `${proprietyName}: ${propriety}, `;
  }, String());
}

function stringifyAttributes(properties: any) {
  const propertieNames = Object.keys(properties);

  return propertieNames.reduce((accumulator, attributeName) => {
    const attribute = properties[attributeName];
    const isStyleAttribute = isPlainObject(attribute);

    if (isStyleAttribute) {
      return (
        accumulator + ` ${attributeName}={{ ${stringifyStyle(attribute)} }}`
      );
    }

    return accumulator + ` ${attributeName}="${attribute}"`;
  }, String());
}

export function stringify(node: any) {
  const properties = stringifyAttributes(node.properties);
  const buffer = `<${node.tagName} ${properties}>`;

  const childrensBuffer = node.children.reduce((ac: any, childrenNode: any) => {
    return ac + stringify(childrenNode);
  }, buffer);

  return childrensBuffer + `</${node.tagName}>`;
}
