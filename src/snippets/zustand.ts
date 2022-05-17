import { Snippet } from '../types';

export const zuCreate: Snippet = {
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

export const zuCreateImmer: Snippet = {
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

export const zuUse: Snippet = {
  prefix: 'zuu',
  body: ['const ${2:bears} = use${1:Store}(state => state.$2)'],
  description: 'Zustand useStore',
};

export const zuUsePickObj: Snippet = {
  prefix: 'zuuObj',
  body: [
    'const { ${2:nuts}, ${3:honey} } = use${1:Store}(state => ({ $2: state.$2, $3: state.$3 }), shallow$4)',
  ],
  description: 'Zustand useStore with shallow',
};

export const zuUsePickArr: Snippet = {
  prefix: 'zuuArr',
  body: ['const [${2:nuts}, ${3:honey}] = use${1:Store}(state => [state.$2, state.$3], shallow$4)'],
  description: 'Zustand useStore with shallow',
};
