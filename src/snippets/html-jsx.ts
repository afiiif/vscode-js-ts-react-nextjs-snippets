import { Snippet } from '../types';

export const jsxWrap: Snippet = {
  prefix: ['_rFrag', '_frag', '_jsxFrag'],
  body: ['<$1$0>', '\t$TM_SELECTED_TEXT', '</$1>'],
  description: 'Wrap component with Fragment',
};

export const jsxIf: Snippet = {
  prefix: ['_rIf', '_jsxIf'],
  body: ['{${1:condition} ? (', '\t$TM_SELECTED_TEXT', ') : (', '\t${0:null}', ')}'],
  description: 'Wrap in if',
};

export const jsxIfWithFragment: Snippet = {
  prefix: ['_rIfFrag', '_jsxIfFrag'],
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

export const jsxElse: Snippet = {
  prefix: ['_rEl', '_jsxEl'],
  body: ['{${1:condition} ? (', '\t${0:null}', ') : (', '\t$TM_SELECTED_TEXT', ')}'],
  description: 'Wrap in else',
};

export const jsxElseWithFragment: Snippet = {
  prefix: ['_rElFrag', '_jsxElFrag'],
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

export const jsxConditional: Snippet = {
  prefix: ['_rCond', '_jsxCond'],
  body: ['{${1:condition} && (', '\t$TM_SELECTED_TEXT', ')}'],
  description: 'Wrap with conditional',
};

export const jsxConditionalWithFragment: Snippet = {
  prefix: ['_rCondFrag', '_jsxCondFrag'],
  body: ['{${1:condition} && (', '\t<>', '\t\t$TM_SELECTED_TEXT', '\t</>', ')}'],
  description: 'Wrap with conditional',
};

export const jsxInnerHTML: Snippet = {
  prefix: ['innerHTML', 'dangerously'],
  body: ['<${1:div} dangerouslySetInnerHTML={{ __html: $2 }} />'],
  description: 'Create element with `dangerouslySetInnerHTML` prop',
};

export const jsxButton: Snippet = {
  prefix: 'button',
  body: ['<button type="button" onClick={${2:onClick}}$3>', '\t${1:Button}', '</button>'],
  description: 'Create `<button />` element',
};

export const jsxLoop: Snippet = {
  prefix: 'loopJSX',
  body: [
    '{${1:list}.map((${2:$1Item}) => {$5',
    '\treturn (',
    '\t\t<${4:div} key={${2:$1Item}.${3:id}}>$0</$4>',
    '\t)',
    '})}',
  ],
  description: 'JSX mapping an array',
};
