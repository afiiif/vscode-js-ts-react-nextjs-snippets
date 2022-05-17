import { Snippet } from '../types';

export const wrapWithFragment: Snippet = {
  prefix: ['_frag', 'wrap'],
  body: ['<$1$0>', '\t${TM_SELECTED_TEXT}', '</$1>'],
  description: 'Wrap component with Fragment',
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
