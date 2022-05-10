exports.zuCreate = {
  prefix: 'zuc',
  body: [
    "import create from 'zustand'",
    '',
    'const use${1:Store} = create((set) => ({',
    '\t${0:// code}',
    '}))',
    '',
    'export default use$1',
  ],
  description: 'Zustand create store',
};

exports.zuCreateImmer = {
  prefix: 'zuci',
  body: [
    "import create from 'zustand'",
    "import { immer } from 'zustand/middleware/immer'",
    '',
    'const use${1:Store} = create(immer((set) => ({',
    '\t${0:// code}',
    '})))',
    '',
    'export default use$1',
  ],
  description: 'Zustand create store',
};

exports.zuUse = {
  prefix: 'zuu',
  body: ['const ${2:bears} = use${1:Store}(state => state.$2)'],
  description: 'Zustand useStore',
};

exports.zuUsePickObj = {
  prefix: 'zuuObj',
  body: [
    'const { ${2:nuts}, ${3:honey} } = use${1:Store}(state => ({ $2: state.$2, $3: state.$3 }), shallow$4)',
  ],
  description: 'Zustand useStore with shallow',
};

exports.zuUsePickArr = {
  prefix: 'zuuArr',
  body: ['const [${2:nuts}, ${3:honey}] = use${1:Store}(state => [state.$2, state.$3], shallow$4)'],
  description: 'Zustand useStore with shallow',
};
