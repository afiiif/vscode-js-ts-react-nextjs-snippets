import { FILENAME_PASCALCASE } from '../constants';
import { Snippet } from '../types';

export const nextGSS: Snippet = {
  prefix: ['nGSS', 'getServerSideProps'],
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

export const nextGST: Snippet = {
  prefix: ['nGST', 'getStaticProps'],
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

export const nextPageGSS: Snippet = {
  prefix: 'npGSS',
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

export const nextPageGST: Snippet = {
  prefix: 'npGST',
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

export const nextGSSArrowFunction: Snippet = {
  prefix: ['naGSS', 'getServerSideProps'],
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

export const nextGSTArrowFunction: Snippet = {
  prefix: ['naGST', 'getStaticProps'],
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

export const nextPageGSSArrowFunction: Snippet = {
  prefix: 'npaGSS',
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

export const nextPageGSTArrowFunction: Snippet = {
  prefix: 'npaGST',
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
  body: ['<Link href=$1>', '\t<a>${2:LinkText}</a>', '</Link>'],
  description: 'Next.js Link component',
};
