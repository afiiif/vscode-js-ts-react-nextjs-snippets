import { Snippet } from '../types';

export const rqUseQuery: Snippet = {
  prefix: ['rqUseQuery', 'useQuery'],
  body: ['const { isLoading, data, error } = ${2:useQuery}$3($1)', ''],
  description: 'React Query useQuery',
};

export const rqLDE: Snippet = {
  prefix: 'rqLDE',
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

export const rqUseQueryLDE: Snippet = {
  prefix: ['rqUseQueryLDE', 'useQueryLDE'],
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

export const rqLED: Snippet = {
  prefix: 'rqLED',
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

export const rqUseQueryLED: Snippet = {
  prefix: ['rqUseQueryLED', 'useQueryLED'],
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

export const rqUseMutation: Snippet = {
  prefix: ['rqUseMutation', 'useMutation'],
  body: ['const { mutate, isLoading } = ${2:useMutation}$3($1)', ''],
  description: 'React Query useMutation',
};
