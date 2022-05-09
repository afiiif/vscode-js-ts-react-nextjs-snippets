const { FILENAME_PASCALCASE } = require('../constants');

exports.nextGSS = {
  prefix: 'nxGSS/$nxGSS/getServerSideProps',
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
  prefix: 'nxGST/$nxGST/getStaticProps',
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
  prefix: 'nxGSP/$nxGSP/getStaticPaths',
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
  prefix: 'nxpGSS/$nxpGSS/getServerSideProps',
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
  prefix: 'nxpGST/$nxpGST/getStaticProps',
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
  prefix: 'nxaGSS/$nxaGSS/getServerSideProps',
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
  prefix: 'nxaGST/$nxaGST/getStaticProps',
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
  prefix: 'nxaGSP/$nxaGSP/getStaticPaths',
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
  prefix: 'nxpaGSS/$nxpaGSS/getServerSideProps',
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
  prefix: 'nxpaGST/$nxpaGST/getStaticProps',
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
  prefix: 'nxUseRouter/$nxUseRouter/useRouter',
  body: ['const { ${1:pathname, query} } = useRouter$2()'],
  description: 'Next.js useRouter',
};

exports.nextLinkComponent = {
  prefix: 'nxLink/$nxLink',
  body: ['<Link href=$1>', '\t<a>${2:LinkText}</a>', '</Link>'],
  description: 'Next.js Link component',
};
