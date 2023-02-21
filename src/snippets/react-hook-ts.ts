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
  body: ['const ${1:memo} = useMemo$5<${4:any}>(() => ${3:computeValue}, [$2])'],
  description: 'React useMemo',
};

export const tsUseCallback: Snippet = {
  prefix: 'useCallback',
  body: [
    'const ${1:callback} = useCallback$5<() => ${4:void}>(() => {',
    '\t${3:// code}',
    '}, [$2])',
  ],
  description: 'React useCallback',
};
