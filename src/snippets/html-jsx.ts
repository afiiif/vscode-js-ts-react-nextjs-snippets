import { Snippet } from '../types';

export const htmlButton: Snippet = {
  prefix: 'button',
  body: ['<button type="button" onClick={${2:onClick}}$3>', '\t${1:Button}', '</button>'],
  description: 'Create `<button />` element',
};
