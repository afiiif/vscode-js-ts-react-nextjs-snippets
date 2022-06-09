import { FILENAME_CAMELCASE } from '../constants';
import { Snippet } from '../types';

export const useState: Snippet = {
  prefix: 'useState',
  body: ['const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState$3($2)'],
  description: 'React useState',
};

export const useRef: Snippet = {
  prefix: 'useRef',
  body: ['const ${1:ref} = useRef$3(${2:null})'],
  description: 'React useRef',
};

export const useReducer: Snippet = {
  prefix: 'useReducer',
  body: ['const [state, dispatch] = useReducer$3(${1:reducer}, ${2:null})'],
  description: 'React useReducer',
};

export const useEffect: Snippet = {
  prefix: 'useEffect',
  body: ['useEffect$3(() => {', '\t${2:// code}', '}, [$1])', ''],
  description: 'React useEffect',
};

export const useEffectV2: Snippet = {
  prefix: 'useEffectV2',
  body: [
    'useEffect$4(() => {',
    '\t${2:// code}',
    '',
    '\treturn () => {',
    '\t\t${3:// cleanup}',
    '\t}',
    '}, [$1])',
    '',
  ],
  description: 'React useEffect with cleanup',
};

export const useLayoutEffect: Snippet = {
  prefix: 'useLayoutEffect',
  body: ['useLayoutEffect$3(() => {', '\t${2:// code}', '}, [$1])', ''],
  description: 'React useLayoutEffect',
};

export const useLayoutEffectV2: Snippet = {
  prefix: 'useLayoutEffectV2',
  body: [
    'useLayoutEffect$4(() => {',
    '\t${2:// code}',
    '',
    '\treturn () => {',
    '\t\t${3:// cleanup}',
    '\t}',
    '}, [$1])',
    '',
  ],
  description: 'React useLayoutEffect with cleanup',
};

export const useMemo: Snippet = {
  prefix: 'useMemo',
  body: ['useMemo$3(() => ${2:computeValue}, [$1])'],
  description: 'React useMemo',
};

export const useCallback: Snippet = {
  prefix: 'useCallback',
  body: ['useCallback$3(() => {', '\t${2:// code}', '}, [$1])', ''],
  description: 'React useCallback',
};

export const reactCustomHook: Snippet = {
  prefix: ['rfhook', 'hook'],
  body: [
    "import { useEffect } from 'react'",
    '',
    `export default function \${1:${FILENAME_CAMELCASE}}() {`,
    '\t${0:// code}',
    '\t',
    '\tuseEffect(() => {',
    '\t\t// code',
    '\t}, [])',
    '\t',
    '\treturn null',
    '}',
  ],
  description: 'React create custom hook',
};

export const reactCustomHookArrowFunction: Snippet = {
  prefix: ['rafhook', 'hook'],
  body: [
    "import { useEffect } from 'react'",
    '',
    `const \${1:${FILENAME_CAMELCASE}} = () => {`,
    '\t${0:// code}',
    '\t',
    '\tuseEffect(() => {',
    '\t\t// code',
    '\t}, [])',
    '\t',
    '\treturn null',
    '}',
    '',
    'export default $1',
  ],
  description: 'React create custom hook',
};
