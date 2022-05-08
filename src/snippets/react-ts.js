const { FILENAME_PASCALCASE } = require('../constants');

exports.tsReactFunctionalComponent = {
  prefix: 'rfc $$rfc(ts)',
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
  prefix: 'rfce $$rfce(ts)',
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
  prefix: 'rafc $$rafc(ts)',
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
  prefix: 'rafce $$rafce(ts)',
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

exports.tsReactFunctionalComponentV2 = {
  prefix: 'rfc $$rfc(ts)',
  body: [
    'type Props = {',
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

exports.tsReactFunctionalExportComponentV2 = {
  prefix: 'rfce $$rfce(ts)',
  body: [
    'type Props = {',
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

exports.tsReactArrowFunctionComponentV2 = {
  prefix: 'rafc $$rafc(ts)',
  body: [
    'type Props = {',
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

exports.tsReactArrowFunctionExportComponentV2 = {
  prefix: 'rafce $$rafce(ts)',
  body: [
    'type Props = {',
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
