const fs = require('fs');

const vanilla = require('./snippets/vanilla');

const react = require('./snippets/react');
const reactTS = require('./snippets/react-ts');
const reactHook = require('./snippets/react-hook');
const reactHookTS = require('./snippets/react-hook-ts');

const next = require('./snippets/next');
const nextTS = require('./snippets/next-ts');

// Add line break at the end
Object.keys(react).forEach((key) => react[key].body.push(''));
Object.keys(reactTS).forEach((key) => reactTS[key].body.push(''));

const javascriptSnippets = {
  ...vanilla,
  ...react,
  ...reactHook,
  ...next,
};

const typescriptSnippets = {
  ...vanilla,
  ...react,
  ...reactTS,
  ...reactHook,
  ...reactHookTS,
  ...next,
  ...nextTS,
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
