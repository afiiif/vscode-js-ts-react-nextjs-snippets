exports.FILENAME_PASCALCASE =
  '${RELATIVE_FILEPATH/(^.+?(?=\\/[^\\/]+\\/[^\\/]+\\.[jt]sx?))|(\\.[jt]sx?$|\\/(?:index|\\[).*|.+\\/(?!(?:index|\\[))|[.\\-_\\/])|(\\w+)/${3:/capitalize}/g}';
