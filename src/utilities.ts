import { Snippet, SnippetCollection } from './types';

export const normalizeSnippet = (snippet: Snippet, isTS?: boolean) => {
  const [primaryPrefix, ...prefix] =
    typeof snippet.prefix === 'string' ? [snippet.prefix] : snippet.prefix;
  const flaggedPrefix = isTS ? `$$${primaryPrefix}` : `$${primaryPrefix}`;

  const finalPrefix = [
    isTS ? `${primaryPrefix}.TS` : primaryPrefix,
    flaggedPrefix,
    ...prefix,
    isTS ? '🟦' : '🟨',
  ];

  return {
    ...snippet,
    prefix: finalPrefix.join('.'),
  };
};

export const normalizeSnippets = (snippets: SnippetCollection, isTS?: boolean) => {
  const normalizedSnippets: SnippetCollection = {};
  Object.keys(snippets).forEach((key) => {
    normalizedSnippets[key] = normalizeSnippet(snippets[key], isTS);
  });
  return normalizedSnippets;
};
