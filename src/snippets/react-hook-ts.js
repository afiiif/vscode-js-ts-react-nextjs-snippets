exports.tsUseState = {
  prefix: 'useState/$$useState(ts)',
  body: ['const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState$4<${3:any}>($2)'],
  description: 'React useState',
};

exports.tsUseRef = {
  prefix: 'useRef/$$useRef(ts)',
  body: ['const ${1:ref} = useRef$4<${3:HTMLDivElement}>(${2:null})'],
  description: 'React useRef',
};

exports.tsUseMemo = {
  prefix: 'useMemo/$$useMemo(ts)',
  body: ['useMemo$4<${3:any}>(() => ${1:computeValue}, [$2])'],
  description: 'React useMemo',
};

exports.tsUseCallback = {
  prefix: 'useCallback/$$useCallback(ts)',
  body: ['useCallback$4<() => ${3:void}>(() => {', '\t${1:// code}', '}, [$2])', ''],
  description: 'React useCallback',
};
