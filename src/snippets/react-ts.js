const { FILENAME_PASCALCASE } = require('../constants');

exports.tsReactFunctionalComp = {
  prefix: 'rfc.$$rfc(ts)',
  body: [
    'interface Props {',
    '  $2: unknown;',
    '}',
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}({ \${2:children} }: Props) {$0`,
    '\treturn (',
    '\t\t<${3:div}>${4:$1 Component}</$3>',
    '\t)',
    '}',
  ],
  description: 'React Functional Component',
};

exports.tsReactFunctionalCompExport = {
  prefix: 'rfce.$$rfce(ts)',
  body: [
    'interface Props {',
    '  $2: unknown;',
    '}',
    '',
    `function \${1:${FILENAME_PASCALCASE}}({ \${2:children} }: Props) {$0`,
    '\treturn (',
    '\t\t<${3:div}>${4:$1 Component}</$3>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Functional Component',
};

exports.tsReactArrowFunctionComp = {
  prefix: 'rafc.$$rafc(ts)',
  body: [
    'interface Props {',
    '  $2: unknown;',
    '}',
    '',
    `export const \${1:${FILENAME_PASCALCASE}} = ({ \${2:children} }: Props) => {$0`,
    '\treturn (',
    '\t\t<${3:div}>${4:$1 Component}</$3>',
    '\t)',
    '}',
  ],
  description: 'React Arrow Function Component',
};

exports.tsReactArrowFunctionCompExport = {
  prefix: 'rafce.$$rafce(ts)',
  body: [
    'interface Props {',
    '  $2: unknown;',
    '}',
    '',
    `const \${1:${FILENAME_PASCALCASE}} = ({ \${2:children} }: Props) => {$0`,
    '\treturn (',
    '\t\t<${3:div}>${4:$1 Component}</$3>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component',
};

exports.tsReactFunctionalCompV2 = {
  prefix: 'rfc.$$rfc(ts)',
  body: [
    'type Props = {',
    '  $2: unknown;',
    '}',
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}({ \${2:children} }: Props) {$0`,
    '\treturn (',
    '\t\t<${3:div}>${4:$1 Component}</$3>',
    '\t)',
    '}',
  ],
  description: 'React Functional Component',
};

exports.tsReactFunctionalCompExportV2 = {
  prefix: 'rfce.$$rfce(ts)',
  body: [
    'type Props = {',
    '  $2: unknown;',
    '}',
    '',
    `function \${1:${FILENAME_PASCALCASE}}({ \${2:children} }: Props) {$0`,
    '\treturn (',
    '\t\t<${3:div}>${4:$1 Component}</$3>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Functional Component',
};

exports.tsReactArrowFunctionCompV2 = {
  prefix: 'rafc.$$rafc(ts)',
  body: [
    'type Props = {',
    '  $2: unknown;',
    '}',
    '',
    `export const \${1:${FILENAME_PASCALCASE}} = ({ \${2:children} }: Props) => {$0`,
    '\treturn (',
    '\t\t<${3:div}>${4:$1 Component}</$3>',
    '\t)',
    '}',
  ],
  description: 'React Arrow Function Component',
};

exports.tsReactArrowFunctionCompExportV2 = {
  prefix: 'rafce.$$rafce(ts)',
  body: [
    'type Props = {',
    '  $2: unknown;',
    '}',
    '',
    `const \${1:${FILENAME_PASCALCASE}} = ({ \${2:children} }: Props) => {$0`,
    '\treturn (',
    '\t\t<${3:div}>${4:$1 Component}</$3>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component',
};
