exports.wrapWithFragment = {
  prefix: ['_frag', 'wrap'],
  body: ['<$1$0>', '\t${TM_SELECTED_TEXT}', '</$1>'],
  description: 'Wrap component with Fragment',
};

exports.wrapWithJsonStringify = {
  prefix: ['_js', 'wrap'],
  body: ['JSON.stringify(${TM_SELECTED_TEXT})'],
  description: 'Wrap with `JSON.stringify`',
};

exports.wrapWithJsonParse = {
  prefix: ['_jp', 'wrap'],
  body: ['JSON.parse(${TM_SELECTED_TEXT})'],
  description: 'Wrap with `JSON.parse`',
};
