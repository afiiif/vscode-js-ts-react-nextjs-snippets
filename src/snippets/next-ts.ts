import { Snippet } from '../types';

export const tsNextSSR: Snippet = {
  prefix: ['nSSR', 'getServerSideProps'],
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

export const tsNextSSG: Snippet = {
  prefix: ['nSSG', 'getStaticProps'],
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

export const tsNextGSP: Snippet = {
  prefix: ['nGSP', 'getStaticPaths'],
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

export const tsNextSSRArrowFn: Snippet = {
  prefix: ['naSSR', 'getServerSideProps'],
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

export const tsNextSSGArrowFn: Snippet = {
  prefix: ['naSSG', 'getStaticProps'],
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

export const tsNextGSPArrowFn: Snippet = {
  prefix: ['naGSP', 'getStaticPaths'],
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
