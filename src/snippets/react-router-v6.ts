import { Snippet } from '../types';

export const reactRouterCreate: Snippet = {
  prefix: ['rou', 'createBrowserRouter'],
  body: [
    'const router = createBrowserRouter([',
    '\t{',
    '\t\tpath: "/$1",',
    '\t\telement: <${2:Root} />,',
    '\t\terrorElement: <ErrorPage />,',
    '\t\tloader: rootLoader,$3',
    '\t},',
    '])',
    '',
  ],
  description: 'React Router v6 createBrowserRouter',
};

export const reactRouterChildren: Snippet = {
  prefix: ['rou', 'children'],
  body: [
    'children: [',
    '\t{',
    '\t\tpath: "$1",',
    '\t\telement: <${2:DetailPage} />,',
    '\t\tloader: ${3:detailPageLoader},',
    '\t},',
    '],',
  ],
  description: 'React Router v6 router children',
};

export const reactRouterUseRouterError: Snippet = {
  prefix: ['rou', 'useRouteError'],
  body: ['const error = useRouteError()'],
  description: 'React Router v6 useRouteError',
};

export const reactRouterUseLoaderData: Snippet = {
  prefix: ['rou', 'useLoaderData'],
  body: ['const { $1 } = useLoaderData$2()'],
  description: 'React Router v6 useLoaderData',
};

export const reactRouterUseNavigation: Snippet = {
  prefix: ['rou', 'useNavigation'],
  body: ['const { ${1:state, location} } = useNavigation$2()'],
  description: 'React Router v6 useNavigation',
};
