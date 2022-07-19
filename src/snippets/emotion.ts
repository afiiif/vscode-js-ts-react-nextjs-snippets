import { FILENAME_PASCALCASE } from '../constants';
import { Snippet } from '../types';

export const reactFnCompEmotion: Snippet = {
  prefix: 'emoRFC',
  body: [
    "import * as styles from './styles'",
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div} css={styles.${3:container}}>${4:$1}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Functional Component with Emotion CSS',
};

export const reactFnCompExportEmotion: Snippet = {
  prefix: 'emoRFCe',
  body: [
    "import * as styles from './styles'",
    '',
    `function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div} css={styles.${3:container}}>${4:$1}</$2>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Functional Component with Emotion CSS',
};

export const reactArrowFnCompEmotion: Snippet = {
  prefix: 'emoRAFC',
  body: [
    "import * as styles from './styles'",
    '',
    `export const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div} css={styles.${3:container}}>${4:$1}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Arrow Function Component with Emotion CSS',
};

export const reactArrowFnCompExportEmotion: Snippet = {
  prefix: 'emoRAFCe',
  body: [
    "import * as styles from './styles'",
    '',
    `const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div} css={styles.${3:container}}>${4:$1}</$2>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component with Emotion CSS',
};
