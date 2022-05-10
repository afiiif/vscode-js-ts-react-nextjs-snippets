const { FILENAME_CAMELCASE } = require('../constants');

exports.useState = {
  prefix: 'useState',
  body: ['const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState$3($2)'],
  description: 'React useState',
};

exports.useRef = {
  prefix: 'useRef',
  body: ['const ${1:ref} = useRef$3(${2:null})'],
  description: 'React useRef',
};

exports.useReducer = {
  prefix: 'useReducer',
  body: ['const [state, dispatch] = useReducer$3(${1:reducer}, ${2:null})'],
  description: 'React useReducer',
};

exports.useEffect = {
  prefix: 'useEffect',
  body: ['useEffect$3(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useEffect',
};

exports.useEffectV2 = {
  prefix: 'useEffectV2',
  body: [
    'useEffect$4(() => {',
    '\t${1:// code}',
    '',
    '\treturn () => {',
    '\t\t${3:// cleanup}',
    '\t}',
    '}, [$2])',
    '',
  ],
  description: 'React useEffect with cleanup',
};

exports.useLayoutEffect = {
  prefix: 'useLayoutEffect',
  body: ['useLayoutEffect$3(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useLayoutEffect',
};

exports.useLayoutEffectV2 = {
  prefix: 'useLayoutEffectV2',
  body: [
    'useLayoutEffect$4(() => {',
    '\t${1:// code}',
    '',
    '\treturn () => {',
    '\t\t${3:// cleanup}',
    '\t}',
    '}, [$2])',
    '',
  ],
  description: 'React useLayoutEffect with cleanup',
};

exports.useMemo = {
  prefix: 'useMemo',
  body: ['useMemo$3(() => ${1:computeValue}, [$2])'],
  description: 'React useMemo',
};

exports.useCallback = {
  prefix: 'useCallback',
  body: ['useCallback$3(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useCallback',
};

exports.reactCustomHook = {
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

exports.reactCustomHookArrowFunction = {
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
