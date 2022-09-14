import { Snippet } from '../types';

export const reactRouterUseHistory: Snippet = {
  prefix: ['rou', 'useHistory'],
  body: ['const { ${1:location, push, replace, goBack} } = useHistory$2()'],
  description: 'React Router v5 useHistory',
};
