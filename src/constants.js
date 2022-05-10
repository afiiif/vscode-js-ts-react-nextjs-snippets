exports.FILENAME_PASCALCASE =
  '${RELATIVE_FILEPATH/(^.+?(?=\\/[^\\/]+\\/[^\\/]+\\.[jt]sx?))|(\\.[jt]sx?$|\\/(?:index|\\[).*|.+\\/(?!(?:index|\\[))|[.\\-_\\/])|(\\w+)/${3:/capitalize}/g}';

exports.FILENAME_CAMELCASE =
  '${RELATIVE_FILEPATH/(^.+?(?=\\/[^\\/]+\\/[^\\/]+\\.[jt]sx?))|(\\.[jt]sx?$|\\/(?:index|\\[).*|.+\\/(?!(?:index|\\[))|[.\\-_\\/])|([\\w\\-_]*)/${3:/camelcase}/g}';
