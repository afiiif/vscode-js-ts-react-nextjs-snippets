import { Snippet } from '../types';

export const stringToTemplateLiterals: Snippet = {
  prefix: '_lt',
  body: ['`${TM_SELECTED_TEXT/^[\'"](.*)[\'"]$/$1/g}`'],
  description: 'Convert regular string to template literals',
};

export const reactStringPropToTemplateLiteral: Snippet = {
  prefix: '_ltr',
  body: ['{`${TM_SELECTED_TEXT/^[\'"](.*)[\'"]$/$1/g}`}'],
  description: "Convert regular string in react prop's value to template literals",
};

export const wrapWithUseMemo: Snippet = {
  prefix: '_useMemo',
  body: ['useMemo$0(() => {', '\t$TM_SELECTED_TEXT', '}, ${1:[]})'],
  description: 'Wrap with function',
};

export const wrapWithUseCallback: Snippet = {
  prefix: '_useCallback',
  body: ['useCallback$0(', '\t$TM_SELECTED_TEXT', ', ${1:[]})'],
  description: 'Wrap with function',
};

export const wrapWithFragment: Snippet = {
  prefix: ['_rFrag', '_frag'],
  body: ['<$1$0>', '\t$TM_SELECTED_TEXT', '</$1>'],
  description: 'Wrap component with Fragment',
};

export const reactIf: Snippet = {
  prefix: '_rIf',
  body: ['{${1:condition} ? (', '\t$TM_SELECTED_TEXT', ') : (', '\t${0:null}', ')}'],
  description: 'Wrap in if',
};

export const reactIfWithFragment: Snippet = {
  prefix: '_rIfFrag',
  body: [
    '{${1:condition} ? (',
    '\t<>',
    '\t\t$TM_SELECTED_TEXT',
    '\t</>',
    ') : (',
    '\t${0:null}',
    ')}',
  ],
  description: 'Wrap in if',
};

export const reactElse: Snippet = {
  prefix: '_rEl',
  body: ['{${1:condition} ? (', '\t${0:null}', ') : (', '\t$TM_SELECTED_TEXT', ')}'],
  description: 'Wrap in else',
};

export const reactElseWithFragment: Snippet = {
  prefix: '_rElFrag',
  body: [
    '{${1:condition} ? (',
    '\t${0:null}',
    ') : (',
    '\t<>',
    '\t\t$TM_SELECTED_TEXT',
    '\t</>',
    ')}',
  ],
  description: 'Wrap in else',
};

export const reactConditional: Snippet = {
  prefix: '_rCon',
  body: ['{${1:condition} && (', '\t$TM_SELECTED_TEXT', ')}'],
  description: 'Wrap with conditional',
};

export const reactConditionalWithFragment: Snippet = {
  prefix: '_rConFrag',
  body: ['{${1:condition} && (', '\t<>', '\t\t$TM_SELECTED_TEXT', '\t</>', ')}'],
  description: 'Wrap with conditional',
};

export const wrapWithJsonStringify: Snippet = {
  prefix: ['_jstr', 'JSON'],
  body: ['JSON.stringify($TM_SELECTED_TEXT${1:, null, 2})'],
  description: 'Wrap with `JSON.stringify`',
};

export const wrapWithJsonParse: Snippet = {
  prefix: ['_jprs', 'JSON'],
  body: ['JSON.parse($TM_SELECTED_TEXT)'],
  description: 'Wrap with `JSON.parse`',
};
