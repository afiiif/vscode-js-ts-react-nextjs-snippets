export const FILENAME_PASCALCASE =
  '${RELATIVE_FILEPATH/(\\.[jt]sx?$|[\\/\\\\](?:index|\\[).*|.+[\\/\\\\](?!(?:index|page|\\[))|[.\\-_\\/\\\\])|(\\w+)/${2:/capitalize}/g}';

export const FILENAME_CAMELCASE =
  '${RELATIVE_FILEPATH/(\\.[jt]sx?$|[\\/\\\\](?:index|\\[).*|.+[\\/\\\\](?!(?:index|page|\\[))|[.\\-_\\/\\\\])|([\\w\\-_]*)/${2:/camelcase}/g}';
