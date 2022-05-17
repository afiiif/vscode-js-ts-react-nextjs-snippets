import { Snippet } from '../types';

const { FILENAME_PASCALCASE } = require('../constants');

export const tdesc: Snippet = {
  prefix: ['tdescribe', 'describe(test)'],
  body: [`describe('\${1:${FILENAME_PASCALCASE}}', () => {`, '\t${0:// code}', '})'],
  description: 'Testing `describe` block',
};

export const tit: Snippet = {
  prefix: ['tit', 'it(test)'],
  body: ["it('should ${1:work}', ${2:async }() => {", '\t${0:// code}', '})'],
  description: 'Testing `it` block',
};

export const tbefore: Snippet = {
  prefix: ['tbefore', 'before(test)'],
  body: ['${1|beforeEach,beforeAll|}(() => {', '\t${0:// code}', '})'],
  description: 'Testing `beforeAll` / `beforeEach` block',
};

export const tafter: Snippet = {
  prefix: ['tafter', 'after(test)'],
  body: ['${1|afterEach,afterAll|}(() => {', '\t${0:// code}', '})'],
  description: 'Testing `afterAll` / `afterEach` block',
};
