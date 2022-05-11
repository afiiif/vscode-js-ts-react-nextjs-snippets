exports.generateInterface = {
  prefix: 'genInt',
  body: [
    'interface ${1:MyInterface} {',
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: unknown;\n}/gm}}',
    '',
  ],
  description: 'From clipboard parameters: generate interface',
};

exports.generateType = {
  prefix: 'genType',
  body: [
    'type ${1:MyType} = {',
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: unknown;\n}/gm}}',
    '',
  ],
  description: 'From clipboard parameters: generate type',
};

exports.generatePropTypes = {
  prefix: 'genPropTypes',
  body: [
    '${1:MyComponent}.propTypes = {',
    '${CLIPBOARD/(\\=\\s*[^,]*),?|(\\w+)|(\\s*),?/${2:+  }$2${2:+: PropTypes.any,\n}/gm}}',
    '',
  ],
  description: 'From clipboard parameters: generate PropTypes',
};
