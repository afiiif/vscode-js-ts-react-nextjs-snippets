exports.rqUseQuery = {
  prefix: 'rqUseQuery.$rqUseQuery.useQuery',
  body: ['const { isLoading, data, error } = ${2:useQuery}$3($1)', ''],
  description: 'React Query useQuery',
};

exports.rqLDE = {
  prefix: 'rqLDE.$rqLDE',
  body: [
    'if (isLoading) {',
    '\treturn <div>⏳ Loading</div>',
    '}',
    '',
    'if (data) {',
    '\treturn <div>🎉 Yay!</div>',
    '}',
    '',
    'return <div>🚫 Nay! ({error.message})</div>',
  ],
  description: 'React Query Loading-Data-Error pattern',
};

exports.rqUseQueryLDE = {
  prefix: 'rqUseQueryLDE.$rqUseQueryLDE.useQueryLDE',
  body: [
    'const { isLoading, data, error } = ${2:useQuery}$3($1)',
    '',
    'if (isLoading) {',
    '\treturn <div>⏳ Loading</div>',
    '}',
    '',
    'if (data) {',
    '\treturn <div>🎉 Yay!</div>',
    '}',
    '',
    'return <div>🚫 Nay! ({error.message})</div>',
  ],
  description: 'React Query useQuery with Loading-Data-Error pattern',
};

exports.rqLED = {
  prefix: 'rqLED.$rqLED',
  body: [
    'if (isLoading) {',
    '\treturn <div>⏳ Loading</div>',
    '}',
    '',
    'if (error) {',
    '\treturn <div>🚫 Nay! ({error.message})</div>',
    '}',
    '',
    'return <div>🎉 Yay!</div>',
  ],
  description: 'React Query Loading-Error-Data pattern',
};

exports.rqUseQueryLED = {
  prefix: 'rqUseQueryLED.$rqUseQueryLED.useQueryLED',
  body: [
    'const { isLoading, error, data } = ${2:useQuery}$3($1)',
    '',
    'if (isLoading) {',
    '\treturn <div>⏳ Loading</div>',
    '}',
    '',
    'if (error) {',
    '\treturn <div>🚫 Nay! ({error.message})</div>',
    '}',
    '',
    'return <div>🎉 Yay!</div>',
  ],
  description: 'React Query useQuery with Loading-Error-Data pattern',
};

exports.rqUseMutation = {
  prefix: 'rqUseMutation.$rqUseMutation.useMutation',
  body: ['const { mutate, isLoading } = ${2:useMutation}$3($1)', ''],
  description: 'React Query useMutation',
};
