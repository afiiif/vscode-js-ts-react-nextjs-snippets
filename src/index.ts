/* eslint-disable unicorn/prefer-module */
import * as fs from 'node:fs';

import { normalizeSnippets } from './utilities';

const vanilla = normalizeSnippets(require('./snippets/vanilla'));

const react = normalizeSnippets(require('./snippets/react'));
const reactTS = normalizeSnippets(require('./snippets/react-ts'), true);
const reactHook = normalizeSnippets(require('./snippets/react-hook'));
const reactHookTS = normalizeSnippets(require('./snippets/react-hook-ts'), true);
const reactNative = normalizeSnippets(require('./snippets/react-native'));

const next = normalizeSnippets(require('./snippets/next'));
const nextTS = normalizeSnippets(require('./snippets/next-ts'), true);
const reactRouter = normalizeSnippets(require('./snippets/react-router'));
const reactRouterV6 = normalizeSnippets(require('./snippets/react-router-v6'));
const reactRouterV5 = normalizeSnippets(require('./snippets/react-router-v5'));
const reactQuery = normalizeSnippets(require('./snippets/react-query'));
const swr = normalizeSnippets(require('./snippets/swr'));
const reactHookForm = normalizeSnippets(require('./snippets/react-hook-form'));
const zustand = normalizeSnippets(require('./snippets/zustand'));
const redux = normalizeSnippets(require('./snippets/redux'));
const reduxTS = normalizeSnippets(require('./snippets/redux-ts'), true);
const emotion = normalizeSnippets(require('./snippets/emotion'));

const testing = normalizeSnippets(require('./snippets/testing'));
const wrapper = normalizeSnippets(require('./snippets/wrapper'));
const htmlJsx = normalizeSnippets(require('./snippets/html-jsx'));
const misc = normalizeSnippets(require('./snippets/misc'));
const miscTS = normalizeSnippets(require('./snippets/misc-ts'), true);

// Add line break at the end
Object.keys(react).forEach((key) => react[key].body.push(''));
Object.keys(reactTS).forEach((key) => reactTS[key].body.push(''));
Object.keys(reactNative).forEach((key) => reactNative[key].body.push(''));
Object.keys(emotion).forEach((key) => emotion[key].body.push(''));

const javascriptSnippets = {
  ...vanilla,
  ...react,
  ...reactHook,
  ...reactNative,
  ...next,
  ...reactRouter,
  ...reactRouterV6,
  ...reactRouterV5,
  ...reactQuery,
  ...swr,
  ...reactHookForm,
  ...zustand,
  ...redux,
  ...emotion,
  ...testing,
  ...wrapper,
  ...htmlJsx,
  ...misc,
};

const typescriptSnippets = {
  ...vanilla,
  ...react,
  ...reactTS,
  ...reactHook,
  ...reactHookTS,
  ...reactNative,
  ...next,
  ...nextTS,
  ...reactRouter,
  ...reactRouterV6,
  ...reactRouterV5,
  ...reactQuery,
  ...swr,
  ...reactHookForm,
  ...zustand,
  ...redux,
  ...reduxTS,
  ...emotion,
  ...testing,
  ...wrapper,
  ...htmlJsx,
  ...misc,
  ...miscTS,
};

// Add scope
Object.keys(javascriptSnippets).forEach((key) => {
  javascriptSnippets[key] = {
    ...javascriptSnippets[key],
    scope: 'javascript,javascriptreact',
  };
});
Object.keys(typescriptSnippets).forEach((key) => {
  typescriptSnippets[key] = {
    ...typescriptSnippets[key],
    scope: 'javascript,typescript,javascriptreact,typescriptreact',
  };
});

// Generate snippet file
fs.mkdirSync('./snippets', { recursive: true });
fs.writeFileSync('./snippets/javascript.json', JSON.stringify(javascriptSnippets, null, 2));
fs.writeFileSync('./snippets/typescript.json', JSON.stringify(typescriptSnippets, null, 2));
