import { Snippet } from '../types';

export const tsRxConfigStore: Snippet = {
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
    '',
    'export type RootState = ReturnType<typeof $1.getState>',
    '',
    'export type AppDispatch = typeof $1.dispatch',
  ],
  description: 'Redux configure store',
};
