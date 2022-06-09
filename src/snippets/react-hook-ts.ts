import { Snippet } from '../types';

export const tsUseState: Snippet = {
  prefix: 'useState',
  body: ['const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState$4<${3:any}>($2)'],
  description: 'React useState',
};

export const tsUseRef: Snippet = {
  prefix: 'useRef',
  body: ['const ${1:ref} = useRef$4<${3:HTMLDivElement}>(${2:null})'],
  description: 'React useRef',
};

export const tsUseMemo: Snippet = {
  prefix: 'useMemo',
  body: ['useMemo$4<${3:any}>(() => ${2:computeValue}, [$1])'],
  description: 'React useMemo',
};

export const tsUseCallback: Snippet = {
  prefix: 'useCallback',
  body: ['useCallback$4<() => ${3:void}>(() => {', '\t${2:// code}', '}, [$1])', ''],
  description: 'React useCallback',
};
