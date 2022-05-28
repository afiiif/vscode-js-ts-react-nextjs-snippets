import { Snippet } from '../types';

import { FILENAME_PASCALCASE } from '../constants';

export const tsReactFunctionalComp: Snippet = {
  prefix: 'rfc',
  body: [
    'type Props = {',
    '\t$2: unknown;',
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

export const tsReactFunctionalCompExport: Snippet = {
  prefix: 'rfce',
  body: [
    'type Props = {',
    '\t$2: unknown;',
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

export const tsReactArrowFunctionComp: Snippet = {
  prefix: 'rafc',
  body: [
    'type Props = {',
    '\t$2: unknown;',
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

export const tsReactArrowFunctionCompExport: Snippet = {
  prefix: 'rafce',
  body: [
    'type Props = {',
    '\t$2: unknown;',
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

export const tsReactFunctionalCompV2: Snippet = {
  prefix: 'rfc',
  body: [
    'interface Props {',
    '\t$2: unknown;',
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

export const tsReactFunctionalCompExportV2: Snippet = {
  prefix: 'rfce',
  body: [
    'interface Props {',
    '\t$2: unknown;',
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

export const tsReactArrowFunctionCompV2: Snippet = {
  prefix: 'rafc',
  body: [
    'interface Props {',
    '\t$2: unknown;',
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

export const tsReactArrowFunctionCompExportV2: Snippet = {
  prefix: 'rafce',
  body: [
    'interface Props {',
    '\t$2: unknown;',
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
