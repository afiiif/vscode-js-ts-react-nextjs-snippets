import { Snippet } from '../types';

export const consoleLog: Snippet = {
  prefix: 'clg',
  body: ['console.log(${1:data})'],
  description: 'console.log',
};

export const consoleLogWithLabel: Snippet = {
  prefix: ['cll', 'clg(labelled)'],
  body: ["console.log('${1:data}', ${1:data})"],
  description: 'console.log with label',
};

export const consoleLogJSON: Snippet = {
  prefix: ['clj', 'clg(json)'],
  body: ["console.log('${1:data}', JSON.stringify(${1:data}, null, 2))"],
  description: 'console.log JSON',
};

export const consoleX: Snippet = {
  prefix: 'ccc',
  body: ["console.${2|log,info,warn,error|}('👉 ${1:Here}')"],
  description: 'console.xxx with label',
};

export const consoleInfo: Snippet = {
  prefix: 'cin',
  body: ['console.info(${1:data})'],
  description: 'console.info',
};

export const consoleWarn: Snippet = {
  prefix: 'cwa',
  body: ['console.warn(${1:data})'],
  description: 'console.warn',
};

export const consoleError: Snippet = {
  prefix: 'cer',
  body: ['console.error(${1:data})'],
  description: 'console.error',
};

export const consoleTable: Snippet = {
  prefix: 'ctl',
  body: ['console.table(${1:data})'],
  description: 'console.table',
};

export const consoleDir: Snippet = {
  prefix: 'cdi',
  body: ['console.dir(${1:data})'],
  description: 'console.dir',
};

export const consoleCount: Snippet = {
  prefix: 'cco',
  body: ['console.count(${1:data})'],
  description: 'console.count',
};

export const consoleGroup: Snippet = {
  prefix: 'cgr',
  body: ['console.group(${1:label})'],
  description: 'console.group',
};

export const consoleGroupEnd: Snippet = {
  prefix: 'cge',
  body: ['console.groupEnd()'],
  description: 'console.groupEnd',
};

export const consoleClear: Snippet = {
  prefix: 'ccl',
  body: ['console.clear()'],
  description: 'console.clear',
};

export const setTimeout: Snippet = {
  prefix: 'sto',
  body: ['setTimeout(() => {', '\t${2:// code}', '}, ${1:1000})', ''],
  description: 'setTimeout',
};

export const setInterval: Snippet = {
  prefix: 'sti',
  body: ['setInterval(() => {', '\t${2:// code}', '}, ${1:1000})', ''],
  description: 'setInterval',
};

export const arrowFunction: Snippet = {
  prefix: 'af',
  body: ['const ${1:myFunction} = ($2) => {', '\t${3:// code}', '}'],
  description: 'Arrow function',
};

export const asyncArrowFunction: Snippet = {
  prefix: 'afa',
  body: ['const ${1:myFunction} = async ($2) => {', '\t${3:// code}', '}'],
  description: 'Async arrow function',
};

export const arrowFunctionExport: Snippet = {
  prefix: 'afe',
  body: ['export const ${1:myFunction} = ($2) => {', '\t${3:// code}', '}'],
  description: 'Arrow function export',
};

export const asyncArrowFunctionExport: Snippet = {
  prefix: 'afae',
  body: ['export const ${1:myFunction} = async ($2) => {', '\t${3:// code}', '}'],
  description: 'Async arrow function export',
};

export const jsonStringify: Snippet = {
  prefix: ['jstr', 'JSON'],
  body: ['JSON.stringify(${2:data}${1:, null, 2})'],
  description: 'JSON.stringify',
};

export const jsonParse: Snippet = {
  prefix: ['jprs', 'JSON'],
  body: ['JSON.parse(${1:data})'],
  description: 'JSON.parse',
};

export const typeOf: Snippet = {
  prefix: 'typeof',
  body: [
    "typeof ${1:data} ${3|===,!==,==,!=|} '${2|undefined,number,string,boolean,object,function,symbol,bigint|}'",
  ],
  description: 'typeof X === ?',
};
