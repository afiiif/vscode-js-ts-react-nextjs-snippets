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
