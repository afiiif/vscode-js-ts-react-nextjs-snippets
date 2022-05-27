import { Snippet } from '../types';

export const generateInterface: Snippet = {
  prefix: 'genInt',
  body: [
    'interface ${1:Props} {',
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: unknown;\n}/gm}}',
    '',
  ],
  description: 'From clipboard (parameters) » generate interface',
};

export const generateType: Snippet = {
  prefix: 'genType',
  body: [
    'type ${1:Props} = {',
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: unknown;\n}/gm}}',
    '',
  ],
  description: 'From clipboard (parameters) » generate type',
};
