import { Snippet } from '../types';

export const reactRouterUseParams: Snippet = {
  prefix: ['rou', 'useParams'],
  body: ['const { $1 } = useParams$2()'],
  description: 'React Router useParams',
};

export const reactRouterUseLocation: Snippet = {
  prefix: ['rou', 'useLocation'],
  body: ['const { pathname } = useLocation$1()'],
  description: 'React Router useLocation',
};

export const reactRouterUseNavigate: Snippet = {
  prefix: ['rou', 'useNavigate'],
  body: ['const navigate = useNavigate$1()'],
  description: 'React Router useNavigate',
};

export const reactRouterUseSearchParams: Snippet = {
  prefix: ['rou', 'useSearchParams'],
  body: ['const [searchParams, setSearchParams] = useSearchParams$1()'],
  description: 'React Router useSearchParams',
};
