exports.consoleLog = {
  prefix: 'clg/$clg',
  body: ['console.log(${1:data})'],
  description: 'console.log',
};

exports.consoleLogWithLabel = {
  prefix: 'cll/$cll/clg(labelled)',
  body: ["console.log('${1:data}', ${1:data})"],
  description: 'console.log with label',
};

exports.consoleLogJSON = {
  prefix: 'clj/$clj/clg(json)',
  body: ["console.log('${1:data}', JSON.stringify(${1:data}, null, 2))"],
  description: 'console.log JSON',
};

exports.consoleInfo = {
  prefix: 'cin/$cin',
  body: ['console.info(${1:data})'],
  description: 'console.info',
};

exports.consoleWarn = {
  prefix: 'cwa/$cwa',
  body: ['console.warn(${1:data})'],
  description: 'console.warn',
};

exports.consoleError = {
  prefix: 'cer/$cer',
  body: ['console.error(${1:data})'],
  description: 'console.error',
};

exports.consoleTable = {
  prefix: 'ctl/$ctl',
  body: ['console.table(${1:data})'],
  description: 'console.table',
};

exports.consoleDir = {
  prefix: 'cdi/$cdi',
  body: ['console.dir(${1:data})'],
  description: 'console.dir',
};

exports.consoleCount = {
  prefix: 'cco/$cco',
  body: ['console.count(${1:data})'],
  description: 'console.count',
};

exports.consoleGroup = {
  prefix: 'cgr/$cgr',
  body: ['console.group(${1:label})'],
  description: 'console.group',
};

exports.consoleGroupEnd = {
  prefix: 'cge/$cge',
  body: ['console.groupEnd()'],
  description: 'console.groupEnd',
};

exports.consoleClear = {
  prefix: 'ccl/$ccl',
  body: ['console.clear()'],
  description: 'console.clear',
};

exports.setTimeout = {
  prefix: 'sto/$sto',
  body: ['setTimeout(() => {', '\t${1:// code}', '}, ${2:1000})', ''],
  description: 'setTimeout',
};

exports.setInterval = {
  prefix: 'sti/$sti',
  body: ['setInterval(() => {', '\t${1:// code}', '}, ${2:1000})', ''],
  description: 'setInterval',
};
