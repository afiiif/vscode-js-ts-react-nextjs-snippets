import { Snippet } from '../types';

export const swrQuery: Snippet = {
  prefix: 'swrQue',
  body: ["const { data, error } = useSWR(${1:'/api/todo'}, ${2:fetchTodo})", ''],
  description: 'SWR query',
};

export const swrQueryCustomHook: Snippet = {
  prefix: ['swrQue', 'hook'],
  body: [
    'const use${1:Todo} = () => {',
    "\tconst { data, error } = useSWR(${2:'/api/todo'}, ${3:fetchTodo})",
    '',
    '\treturn {',
    '\t\tdata,',
    '\t\tisLoading: !error && !data,',
    '\t\terror',
    '\t}',
    '}',
    '',
  ],
  description: 'SWR query custom hook',
};

export const swrMutation: Snippet = {
  prefix: 'swrMut',
  body: ['const { mutate } = useSWRConfig$1()', ''],
  description: 'SWR mutation',
};
