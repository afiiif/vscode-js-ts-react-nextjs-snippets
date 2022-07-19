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
