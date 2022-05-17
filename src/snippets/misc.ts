import { Snippet } from '../types';

export const generateInterface: Snippet = {
  prefix: 'genInt',
  body: [
    'interface ${1:MyInterface} {',
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: unknown;\n}/gm}}',
    '',
  ],
  description: 'From clipboard parameters: generate interface',
};

export const generateType: Snippet = {
  prefix: 'genType',
  body: [
    'type ${1:MyType} = {',
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: unknown;\n}/gm}}',
    '',
  ],
  description: 'From clipboard parameters: generate type',
};

export const generatePropTypes: Snippet = {
  prefix: 'genPropTypes',
  body: [
    '${1:MyComponent}.propTypes = {',
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: PropTypes.any,\n}/gm}}',
    '',
  ],
  description: 'From clipboard parameters: generate PropTypes',
};
