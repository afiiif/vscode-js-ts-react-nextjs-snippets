import { FILENAME_CAMELCASE, FILENAME_PASCALCASE } from '../constants';
import { Snippet } from '../types';

export const getFileNamePascalCase: Snippet = {
  prefix: 'fnpascalcase',
  body: [FILENAME_PASCALCASE],
  description: 'Get filename in PascalCase',
};

export const getFileNameCamelCase: Snippet = {
  prefix: 'fncamelcase',
  body: [FILENAME_CAMELCASE],
  description: 'Get filename in camelCase',
};

export const generatePropTypes: Snippet = {
  prefix: 'genPropTypes',
  body: [
    `\${1:${FILENAME_PASCALCASE}}.propTypes = {`,
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: PropTypes.any,\n}/gm}}',
    '',
  ],
  description: 'From clipboard (parameters) » generate PropTypes',
};
