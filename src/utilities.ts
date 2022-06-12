import { Snippet, SnippetCollection } from './types';

export const normalizeSnippet = (snippet: Snippet, isTS?: boolean) => {
  const [primaryPrefix, ...prefix] =
    typeof snippet.prefix === 'string' ? [snippet.prefix] : snippet.prefix;

  const flaggedPrefix = isTS ? `TS|$$${primaryPrefix}` : `$${primaryPrefix}`;

  const finalPrefix = [primaryPrefix, flaggedPrefix, ...prefix];

  return {
    ...snippet,
    prefix: finalPrefix.join('|'),
  };
};

export const normalizeSnippets = (snippets: SnippetCollection, isTS?: boolean) => {
  const normalizedSnippets: SnippetCollection = {};
  Object.keys(snippets).forEach((key) => {
    const newKey = /^ts[A-Z]/.test(key) ? key.replace(/^ts/, 'TS ') : key;
    normalizedSnippets[`${isTS ? '🟦' : '🟨'} ${newKey}`] = normalizeSnippet(snippets[key], isTS);
  });
  return normalizedSnippets;
};
