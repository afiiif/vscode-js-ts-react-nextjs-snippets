exports.consoleLog = {
  prefix: 'clg',
  body: ['console.log(${1:data})'],
  description: 'console.log',
};

exports.consoleLogWithLabel = {
  prefix: ['cll', 'clg(labelled)'],
  body: ["console.log('${1:data}', ${1:data})"],
  description: 'console.log with label',
};

exports.consoleLogJSON = {
  prefix: ['clj', 'clg(json)'],
  body: ["console.log('${1:data}', JSON.stringify(${1:data}, null, 2))"],
  description: 'console.log JSON',
};

exports.consoleInfo = {
  prefix: 'cin',
  body: ['console.info(${1:data})'],
  description: 'console.info',
};

exports.consoleInfo2 = {
  prefix: 'cin2',
  body: ["console.info('${1:👉 Here}', ${2:data})"],
  description: 'console.info',
};

exports.consoleWarn = {
  prefix: 'cwa',
  body: ['console.warn(${1:data})'],
  description: 'console.warn',
};

exports.consoleError = {
  prefix: 'cer',
  body: ['console.error(${1:data})'],
  description: 'console.error',
};

exports.consoleTable = {
  prefix: 'ctl',
  body: ['console.table(${1:data})'],
  description: 'console.table',
};

exports.consoleDir = {
  prefix: 'cdi',
  body: ['console.dir(${1:data})'],
  description: 'console.dir',
};

exports.consoleCount = {
  prefix: 'cco',
  body: ['console.count(${1:data})'],
  description: 'console.count',
};

exports.consoleGroup = {
  prefix: 'cgr',
  body: ['console.group(${1:label})'],
  description: 'console.group',
};

exports.consoleGroupEnd = {
  prefix: 'cge',
  body: ['console.groupEnd()'],
  description: 'console.groupEnd',
};

exports.consoleClear = {
  prefix: 'ccl',
  body: ['console.clear()'],
  description: 'console.clear',
};

exports.setTimeout = {
  prefix: 'sto',
  body: ['setTimeout(() => {', '\t${2:// code}', '}, ${1:1000})', ''],
  description: 'setTimeout',
};

exports.setInterval = {
  prefix: 'sti',
  body: ['setInterval(() => {', '\t${2:// code}', '}, ${1:1000})', ''],
  description: 'setInterval',
};

exports.arrowFunction = {
  prefix: 'af',
  body: ['const ${1:myFunction} = ($2) => {', '\t${3:// code}', '}'],
  description: 'Arrow function',
};

exports.arrowFunctionExport = {
  prefix: 'afe',
  body: ['export const ${1:myFunction} = ($2) => {', '\t${3:// code}', '}'],
  description: 'Arrow function export',
};
