import { Snippet } from '../types';

export const rxUseDispatch: Snippet = {
  prefix: ['rxDispatch', 'useDispatch'],
  body: ['const dispatch = useDispatch$1()', ''],
  description: 'Redux useDispatch',
};

export const rxConfigStore: Snippet = {
  prefix: ['rxStore', 'configureStore'],
  body: [
    "import { configureStore } from '@reduxjs/toolkit'",
    '',
    'const ${1:store} = configureStore({',
    '\treducer: {',
    '\t\t$2',
    '\t},',
    '})',
    '',
    'export default $1',
  ],
  description: 'Redux configureStore',
};

export const rxCreateSlice: Snippet = {
  prefix: ['rxSlice', 'createSlice'],
  body: [
    'const initialState = {',
    '\t${2:value: 0,}',
    '}',
    '',
    'export const ${1:counter}Slice = createSlice({',
    "\tname: '$1',",
    '\tinitialState,',
    '\treducers: {',
    '\t\t$3',
    '\t},',
    '})',
    '',
    'export const { $0 } = $1Slice.actions',
    '',
    'export default $1Slice.reducer',
  ],
  description: 'Redux createSlice',
};

export const rxCreateSliceWithExample: Snippet = {
  prefix: ['rxSlice', 'createSliceWithExample'],
  body: [
    'const initialState = {',
    '\t${2:value: 0,}',
    '}',
    '',
    'export const ${1:counter}Slice = createSlice({',
    "\tname: '$1',",
    '\tinitialState,',
    '\treducers: {',
    '\t\t$3increment: (state) => {',
    '\t\t\tstate.value += 1',
    '\t\t},',
    '\t\tdecrement: (state) => {',
    '\t\t\tstate.value -= 1',
    '\t\t},',
    '\t\tincrementByAmount: (state, action) => {',
    '\t\t\tstate.value += action.payload',
    '\t\t},',
    '\t},',
    '})',
    '',
    'export const { increment, decrement, incrementByAmount } = $1Slice.actions',
    '',
    'export default $1Slice.reducer',
  ],
  description: 'Redux createSlice (with example)',
};
