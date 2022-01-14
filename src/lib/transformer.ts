
interface parsedSvg {
  type: string;
  children: parsedSvg[];
  tagName: string;
  properties: { [key: string]: any };
}
import nativeCSS from 'css-to-object';
function isStylePropertie(propertieName: string) {
  return propertieName === 'style';
}
function isDataAttribute(propertieName: string) {
  return propertieName.startsWith('data-');
}
function isClassAttribute(propertieName: string) {
  return propertieName == 'class';
}
function transformStyle(style: string) {
  const transformed = nativeCSS(style, {
    numbers: true,
    camelCase: true,
  });

  return transformed;
}
function camelize(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
export function transform(parsedSvg: parsedSvg) {
  const propertiesName = Object.keys(parsedSvg.properties);
  const properties = propertiesName.reduce((ac, propertieName) => {
    const propertieValue = parsedSvg.properties[propertieName];
    if (isStylePropertie(propertieName)) {
      return {
        ...ac,
        [propertieName]: transformStyle(propertieValue),
      };
    }
    if (isDataAttribute(propertieName)) {
      return {
        ...ac,
        [propertieName]: propertieValue,
      };
    }
    if (isClassAttribute(propertieName)) {
      return {
        ...ac,
        className: propertieValue,
      };
    }
    return {
      ...ac,
      [camelize(propertieName)]: propertieValue,
    };
  }, {});
  const children = parsedSvg.children.map(ch => transform(ch)) as any;
  return {
    ...parsedSvg,
    children,
    properties,
  };
}
// export function transformer(root: parsedSvg) {}

// root -> children[] -> children[]
