import { Snippet } from '../types';

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
