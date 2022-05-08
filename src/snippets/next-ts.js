const { FILENAME_PASCALCASE } = require('../constants');

exports.tsNextGSS = {
  prefix: '$$nGSS',
  body: [
    "import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'",
    '',
    'type Context = GetServerSidePropsContext',
    'type Result = GetServerSidePropsResult<{ ${1:data}: any }>',
    '',
    'export async function getServerSideProps(ctx: Context): Promise<Result> {',
    '\tconst { ${2:req, res, params, query} } = ctx',
    '\t$0',
    '\treturn {',
    '\t\tprops: {',
    '\t\t\t$1: null,',
    '\t\t},',
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getServerSideProps',
};

exports.tsNextGST = {
  prefix: '$$nGST',
  body: [
    "import { GetStaticPropsContext, GetStaticPropsResult } from 'next'",
    '',
    'type Context = GetStaticPropsContext',
    'type Result = GetStaticPropsResult<{ ${1:data}: any }>',
    '',
    'export async function getStaticProps({ params }: Context): Promise<Result> {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {',
    '\t\t\t$1: null,',
    '\t\t},',
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getStaticProps',
};

exports.tsNextGSP = {
  prefix: '$$nGSP',
  body: [
    "import { GetStaticPathsResult } from 'next'",
    '',
    'export async function getStaticPaths(): Promise<GetStaticPathsResult> {',
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

exports.tsNextPageGSS = {
  prefix: '$$npGSS',
  body: [
    "import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'",
    '',
    'type Context = GetServerSidePropsContext',
    'type Result = GetServerSidePropsResult<{ ${2:data}: any }>',
    '',
    'export async function getServerSideProps(ctx: Context): Promise<Result> {',
    '\tconst { ${3:req, res, params, query} } = ctx',
    '\t$0',
    '\treturn {',
    '\t\tprops: {',
    '\t\t\t$2: null,',
    '\t\t},',
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

exports.tsNextPageGST = {
  prefix: '$$npGST',
  body: [
    "import { GetStaticPropsContext, GetStaticPropsResult } from 'next'",
    '',
    'type Context = GetStaticPropsContext',
    'type Result = GetStaticPropsResult<{ ${2:data}: any }>',
    '',
    'export async function getStaticProps({ params }: Context): Promise<Result> {',
    '\t${0:// code}',
    '',
    '\treturn {',
    '\t\tprops: {',
    '\t\t\t$2: null,',
    '\t\t},',
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

exports.tsNextGSSArrowFunction = {
  prefix: '$$naGSS',
  body: [
    "import { GetServerSideProps } from 'next'",
    '',
    'export const getServerSideProps: GetServerSideProps<{ ${1:data}: any }> = async (ctx) => {',
    '\tconst { ${2:req, res, params, query} } = ctx',
    '\t$0',
    '\treturn {',
    '\t\tprops: {',
    '\t\t\t$1: null,',
    '\t\t},',
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getServerSideProps arrow function',
};

exports.tsNextGSTArrowFunction = {
  prefix: '$$naGST',
  body: [
    "import { GetStaticProps } from 'next'",
    '',
    'export const getStaticProps: GetStaticProps<{ ${1:data}: any }> = async (ctx) => {',
    '\tconst { params } = ctx',
    '\t$0',
    '\treturn {',
    '\t\tprops: {',
    '\t\t\t$1: null,',
    '\t\t},',
    '\t}',
    '}',
    '',
  ],
  description: 'Next.js getStaticProps arrow function',
};

exports.tsNextGSPArrowFunction = {
  prefix: '$$naGSP',
  body: [
    "import { GetStaticPaths } from 'next'",
    '',
    'export const getStaticPaths: GetStaticPaths = async () => {',
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

exports.tsNextPageGSSArrowFunction = {
  prefix: '$$npaGSS',
  body: [
    "import { GetServerSideProps } from 'next'",
    '',
    'export const getServerSideProps: GetServerSideProps<{ ${2:data}: any }> = async (ctx) => {',
    '\tconst { ${3:req, res, params, query} } = ctx',
    '\t$0',
    '\treturn {',
    '\t\tprops: {',
    '\t\t\t$2: null,',
    '\t\t},',
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

exports.tsNextPageGSTArrowFunction = {
  prefix: '$$npaGST',
  body: [
    "import { GetStaticProps } from 'next'",
    '',
    'export const getStaticProps: GetStaticProps<{ ${2:data}: any }> = async (ctx) => {',
    '\tconst { params } = ctx',
    '\t$0',
    '\treturn {',
    '\t\tprops: {',
    '\t\t\t$2: null,',
    '\t\t},',
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
