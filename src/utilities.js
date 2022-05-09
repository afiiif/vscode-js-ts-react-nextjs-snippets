const normalizeSnippet = (snippet, isTS) => {
  const [primaryPrefix, ...prefix] =
    typeof snippet.prefix === 'string' ? [snippet.prefix] : snippet.prefix;
  const flaggedPrefix = isTS ? `$$${primaryPrefix}(ts)` : `$${primaryPrefix}`;

  const finalPrefix = [primaryPrefix, flaggedPrefix, ...prefix, '💡'];

  return {
    ...snippet,
    prefix: finalPrefix.join('.'),
  };
};

const normalizeSnippets = (snippets, isTS) => {
  const normalizedSnippets = {};
  Object.keys(snippets).forEach((key) => {
    normalizedSnippets[key] = normalizeSnippet(snippets[key], isTS);
  });
  return normalizedSnippets;
};

module.exports = {
  normalizeSnippets,
};
