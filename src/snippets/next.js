const { FILENAME_PASCALCASE } = require('../constants');

exports.nextGSS = {
  prefix: '$nGSS',
  body: [
    'export async function getServerSideProps(${1:{ req, res, params, query \\}}) {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {},',
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getServerSideProps',
};

exports.nextGST = {
  prefix: '$nGST',
  body: [
    'export async function getStaticProps(${1:{ params \\}}) {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {},',
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getStaticProps',
};

exports.nextGSP = {
  prefix: '$nGSP',
  body: [
    'export async function getStaticPaths() {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tpaths: [],',
    "\t\tfallback: ${1|true,false,'blocking'|},",
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getStaticPaths',
};

exports.nextPageGSS = {
  prefix: '$npGSS',
  body: [
    'export async function getServerSideProps(${2:{ req, res, params, query \\}}) {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {},',
    '\t}',
    '}',
    '',
    `export default function \${1:${FILENAME_PASCALCASE}Page}() {`,
    '\treturn (',
    '\t\t<>',
    '\t\t\t$1 content',
    '\t\t</>',
    '\t)',
    '}',
    '',
  ],
  description: 'Next.js page with getServerSideProps',
};

exports.nextPageGST = {
  prefix: '$npGST',
  body: [
    'export async function getStaticProps(${2:{ params \\}}) {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {},',
    '\t}',
    '}',
    '',
    `export default function \${1:${FILENAME_PASCALCASE}Page}() {`,
    '\treturn (',
    '\t\t<>',
    '\t\t\t$1 content',
    '\t\t</>',
    '\t)',
    '}',
    '',
  ],
  description: 'Next.js page with getStaticProps',
};

exports.nextGSSArrowFunction = {
  prefix: '$naGSS',
  body: [
    'export const getServerSideProps = async (${1:{ req, res, params, query \\}}) => {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {},',
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getServerSideProps arrow function',
};

exports.nextGSTArrowFunction = {
  prefix: '$naGST',
  body: [
    'export const getStaticProps = async (${1:{ params \\}}) => {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {},',
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getStaticProps arrow function',
};

exports.nextGSPArrowFunction = {
  prefix: '$naGSP',
  body: [
    'export const getStaticPaths = async () => {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tpaths: [],',
    "\t\tfallback: ${1|true,false,'blocking'|},",
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getStaticPaths arrow function',
};

exports.nextPageGSSArrowFunction = {
  prefix: '$npaGSS',
  body: [
    'export const getServerSideProps = async (${2:{ req, res, params, query \\}}) => {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {},',
    '\t}',
    '}',
    '',
    `const \${1:${FILENAME_PASCALCASE}Page} = () => {`,
    '\treturn (',
    '\t\t<>',
    '\t\t\t$1 content',
    '\t\t</>',
    '\t)',
    '}',
    '',
    'export default $1',
    '',
  ],
  description: 'Next.js page with getServerSideProps',
};

exports.nextPageGSTArrowFunction = {
  prefix: '$npaGST',
  body: [
    'export const getStaticProps = async (${2:{ params \\}}) => {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {},',
    '\t}',
    '}',
    '',
    `const \${1:${FILENAME_PASCALCASE}Page} = () => {`,
    '\treturn (',
    '\t\t<>',
    '\t\t\t$1 content',
    '\t\t</>',
    '\t)',
    '}',
    '',
    'export default $1',
    '',
  ],
  description: 'Next.js page with getStaticProps',
};

exports.nextUseRouter = {
  prefix: '$nUseRouter',
  body: ['const { ${1:pathname, query} } = useRouter$0()'],
  description: 'Next.js useRouter',
};

exports.nextLinkComponent = {
  prefix: '$nLink',
  body: ['<Link href=$1>', '\t<a>${2:LinkText}</a>', '</Link>'],
  description: 'Next.js Link component',
};
