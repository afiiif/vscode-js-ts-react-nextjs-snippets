import { Snippet } from '../types';

export const wrapWithFunction: Snippet = {
  prefix: ['_func', 'wrap'],
  body: ['${1:func}(${TM_SELECTED_TEXT})'],
  description: 'Wrap with function',
};

export const stringToTemplateLiterals: Snippet = {
  prefix: ['_lit', 'wrap'],
  body: ['`${TM_SELECTED_TEXT/^[\'"](.*)[\'"]$/$1/g}`'],
  description: 'Convert regular string to template literals',
};

export const reactStringPropToTemplateLiteral: Snippet = {
  prefix: ['_litr', 'wrap'],
  body: ['{`${TM_SELECTED_TEXT/^[\'"](.*)[\'"]$/$1/g}`}'],
  description: "Convert regular string in react prop's value to template literals",
};

export const wrapWithFragment: Snippet = {
  prefix: ['_frag', 'wrap'],
  body: ['<$1$0>', '\t${TM_SELECTED_TEXT}', '</$1>'],
  description: 'Wrap component with Fragment',
};

export const reactIf: Snippet = {
  prefix: ['_rif', 'wrap'],
  body: ['{${1:condition} ? (', '\t${TM_SELECTED_TEXT}', ') : (', '\t${0:null}', ')}'],
  description: 'Wrap in if',
};

export const reactIfWithFragment: Snippet = {
  prefix: ['_riff', 'wrap'],
  body: [
    '{${1:condition} ? (',
    '\t<>',
    '\t\t${TM_SELECTED_TEXT}',
    '\t</>',
    ') : (',
    '\t${0:null}',
    ')}',
  ],
  description: 'Wrap in if',
};

export const reactElse: Snippet = {
  prefix: ['_rel', 'wrap'],
  body: ['{${1:condition} ? (', '\t${0:null}', ') : (', '\t${TM_SELECTED_TEXT}', ')}'],
  description: 'Wrap in else',
};

export const reactElseWithFragment: Snippet = {
  prefix: ['_relf', 'wrap'],
  body: [
    '{${1:condition} ? (',
    '\t${0:null}',
    ') : (',
    '\t<>',
    '\t\t${TM_SELECTED_TEXT}',
    '\t</>',
    ')}',
  ],
  description: 'Wrap in else',
};

export const reactConditional: Snippet = {
  prefix: ['_rcon', 'wrap'],
  body: ['{${1:condition} && (', '\t${TM_SELECTED_TEXT}', ')}'],
  description: 'Wrap with conditional',
};

export const reactConditionalWithFragment: Snippet = {
  prefix: ['_rconf', 'wrap'],
  body: ['{${1:condition} && (', '\t<>', '\t\t${TM_SELECTED_TEXT}', '\t</>', ')}'],
  description: 'Wrap with conditional',
};

export const wrapWithJsonStringify: Snippet = {
  prefix: ['_js', 'wrap'],
  body: ['JSON.stringify(${TM_SELECTED_TEXT})'],
  description: 'Wrap with `JSON.stringify`',
};

export const wrapWithJsonParse: Snippet = {
  prefix: ['_jp', 'wrap'],
  body: ['JSON.parse(${TM_SELECTED_TEXT})'],
  description: 'Wrap with `JSON.parse`',
};
