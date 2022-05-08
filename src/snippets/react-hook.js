exports.useState = {
  prefix: '$useStateSnippet',
  body: ['const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState$0(${2:initialValue})'],
  description: 'React useState',
};

exports.useRef = {
  prefix: '$useRefSnippet',
  body: ['const ${1:ref} = useRef$0(${2:null})'],
  description: 'React useRef',
};

exports.useReducer = {
  prefix: '$useReducerSnippet',
  body: ['const [state, dispatch] = useReducer$0(${1:reducer}, ${2:initialState})'],
  description: 'React useReducer',
};

exports.useEffect = {
  prefix: '$useEffectSnippet',
  body: ['useEffect(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useEffect',
};

exports.useEffectWithCleanUp = {
  prefix: '$useEffectWithCleanupSnippet',
  body: [
    'useEffect(() => {',
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
  prefix: '$useLayoutEffectSnippet',
  body: ['useLayoutEffect(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useLayoutEffect',
};

exports.useLayoutEffectWithCleanUp = {
  prefix: '$useLayoutEffectWithCleanupSnippet',
  body: [
    'useLayoutEffect(() => {',
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
  prefix: '$useMemoSnippet',
  body: ['useMemo(() => ${1:computeValue}, [$2])'],
  description: 'React useMemo',
};

exports.useCallback = {
  prefix: '$useCallbackSnippet',
  body: ['useCallback(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useCallback',
};
