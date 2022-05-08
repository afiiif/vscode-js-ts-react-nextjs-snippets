const { FILENAME_PASCALCASE } = require('../constants');

exports.tsReactFunctionalComponent = {
  prefix: '$$rfc',
  body: [
    'interface Props {',
    '  $2: unknown;',
    '}',
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}({ \${2:children} }: Props) {`,
    '\treturn (',
    '\t\t<${3:div}>${0:$1 Component}</$3>',
    '\t)',
    '}',
  ],
  description: 'React Functional Component',
};

exports.tsReactFunctionalExportComponent = {
  prefix: '$$rfce',
  body: [
    'interface Props {',
    '  $2: unknown;',
    '}',
    '',
    `function \${1:${FILENAME_PASCALCASE}}({ \${2:children} }: Props) {`,
    '\treturn (',
    '\t\t<${3:div}>${0:$1 Component}</$3>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Functional Component',
};

exports.tsReactArrowFunctionComponent = {
  prefix: '$$rafc',
  body: [
    'interface Props {',
    '  $2: unknown;',
    '}',
    '',
    `export const \${1:${FILENAME_PASCALCASE}} = ({ \${2:children} }: Props) => {`,
    '\treturn (',
    '\t\t<${3:div}>${0:$1 Component}</$3>',
    '\t)',
    '}',
  ],
  description: 'React Arrow Function Component',
};

exports.tsReactArrowFunctionExportComponent = {
  prefix: '$$rafce',
  body: [
    'interface Props {',
    '  $2: unknown;',
    '}',
    '',
    `const \${1:${FILENAME_PASCALCASE}} = ({ \${2:children} }: Props) => {`,
    '\treturn (',
    '\t\t<${3:div}>${0:$1 Component}</$3>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component',
};
