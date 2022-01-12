const isPlainObject = require('lodash.isplainobject');
const isString = require('lodash.isstring');

function stringifyStyle(style = {}) {
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

function stringifyAttributes(attributes = {}) {
  const attributeNames = Object.keys(attributes);

  return attributeNames.reduce((accumulator, attributeName) => {
    const attribute = attributes[attributeName];
    const isStyleAttribute = isPlainObject(attribute);

    if (isStyleAttribute) {
      return (
        accumulator + ` ${attributeName}={{ ${stringifyStyle(attribute)} }}`
      );
    }

    return accumulator + ` ${attributeName}="${attribute}"`;
  }, String());
}

function stringify(node) {
  if (isString(node)) {
    return node;
  }
  const properties = stringifyAttributes(node.properties);
  const buffer = `<${node.tagName} ${properties}>`;

  const childrensBuffer = node.children.reduce((ac: any, childrenNode: any) => {
    return ac + stringify(childrenNode);
  }, buffer);

  return childrensBuffer + `</${node.name}>`;
}

module.exports = stringify;
