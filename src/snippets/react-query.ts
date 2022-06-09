import { Snippet } from '../types';

export const rqQuery: Snippet = {
  prefix: 'rqUseQue',
  body: ['const { isLoading, data, error } = ${2:useQuery}$3($1)', ''],
  description: 'React Query useQuery',
};

export const rqMutation: Snippet = {
  prefix: 'rqUseMut',
  body: ['const { mutate, isLoading } = ${2:useMutation}$3($1)', ''],
  description: 'React Query useMutation',
};

export const rqInfQuery: Snippet = {
  prefix: 'rqUseInf',
  body: [
    'const { isLoading, isFetchingNextPage, data, error, fetchNextPage } = useInfiniteQuery$2($1)',
    '',
  ],
  description: 'React Query useInfiniteQuery',
};

export const rqQueryCustomHook: Snippet = {
  prefix: ['rqUseQue', 'hook'],
  body: [
    "export const use${1:Todo}Query = () => useQuery(['${1/(.*)/${1:/downcase}/}'], fetch$1)",
    '',
  ],
  description: 'React Query useQuery custom hook',
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

export const rqQueryLDE: Snippet = {
  prefix: 'rqUseQueLDE',
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

export const rqQueryLED: Snippet = {
  prefix: 'rqUseQueLED',
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
