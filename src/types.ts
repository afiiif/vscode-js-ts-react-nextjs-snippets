export type Snippet = {
  prefix: string | string[];
  body: string[];
  description?: string;
  scope?: string;
};

export type SnippetCollection = { [key: string]: Snippet };
