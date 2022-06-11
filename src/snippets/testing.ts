import { FILENAME_PASCALCASE } from '../constants';
import { Snippet } from '../types';

export const testDescribe: Snippet = {
  prefix: ['tDescribe', 'describe(test)'],
  body: [`describe('\${1:${FILENAME_PASCALCASE}}', () => {`, '\t${0:// code}', '})'],
  description: 'Testing `describe` block',
};

export const testIt: Snippet = {
  prefix: ['tIt', 'it(test)'],
  body: ["it('should ${1:work}', ${2:async }() => {", '\t${0:// code}', '})'],
  description: 'Testing `it` block',
};

export const test: Snippet = {
  prefix: ['tTest', '(test)'],
  body: [`test('\${1:${FILENAME_PASCALCASE}}', \${2:async }() => {`, '\t${0:// code}', '})'],
  description: 'Testing `test` block',
};

export const testBefore: Snippet = {
  prefix: ['tBefore', 'before(test)'],
  body: ['${1|beforeEach,beforeAll|}(() => {', '\t${0:// code}', '})'],
  description: 'Testing `beforeAll` / `beforeEach` block',
};

export const testAfter: Snippet = {
  prefix: ['tAfter', 'after(test)'],
  body: ['${1|afterEach,afterAll|}(() => {', '\t${0:// code}', '})'],
  description: 'Testing `afterAll` / `afterEach` block',
};
