import { FILENAME_PASCALCASE } from '../constants';
import { Snippet } from '../types';

export const nextSSR: Snippet = {
  prefix: ['nSSR', 'getServerSideProps'],
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

export const nextSSG: Snippet = {
  prefix: ['nSSG', 'getStaticProps'],
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

export const nextGSP: Snippet = {
  prefix: ['nGSP', 'getStaticPaths'],
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

export const nextPageSSR: Snippet = {
  prefix: 'npSSR',
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

export const nextPageSSG: Snippet = {
  prefix: 'npSSG',
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

export const nextSSRArrowFunction: Snippet = {
  prefix: ['naSSR', 'getServerSideProps'],
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

export const nextSSGArrowFunction: Snippet = {
  prefix: ['naSSG', 'getStaticProps'],
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

export const nextGSPArrowFunction: Snippet = {
  prefix: ['naGSP', 'getStaticPaths'],
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

export const nextPageSSRArrowFunction: Snippet = {
  prefix: 'npaSSR',
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

export const nextPageSSGArrowFunction: Snippet = {
  prefix: 'npaSSG',
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

export const nextUseRouter: Snippet = {
  prefix: ['nUseRouter', 'useRouter'],
  body: ['const { ${1:pathname, query} } = useRouter$2()'],
  description: 'Next.js useRouter',
};

export const nextLinkComponent: Snippet = {
  prefix: 'nLink',
  body: ['<Link href=${1:"/"}>', '\t<a>${2:LinkText}</a>', '</Link>'],
  description: 'Next.js Link component',
};

export const nextCustomDocComponent: Snippet = {
  prefix: 'nDoc',
  body: [
    "import { Html, Head, Main, NextScript } from 'next/document'",
    '',
    'export default function Document() {',
    '\treturn (',
    '\t\t<Html>',
    '\t\t\t<Head />',
    '\t\t\t<body>',
    '\t\t\t\t<Main />',
    '\t\t\t\t<NextScript />',
    '\t\t\t</body>',
    '\t\t</Html>',
    '\t)',
    '}',
    '',
  ],
  description: 'Next.js Custom Document component',
};
