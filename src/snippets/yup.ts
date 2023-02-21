import { Snippet } from '../types';

export const yupV0Schema: Snippet = {
  prefix: 'yupSchema',
  body: [
    'export const ${1:user}Schema = yup.object({',
    '\t${2:name}: ${3:yup.string().required()},',
    '})',
    '',
    'export type ${1/(.*)/${1:/capitalize}/} = yup.Asserts<typeof ${1:user}Schema>',
    '',
  ],
  description: 'Yup v0 schema',
};

export const yupV1Schema: Snippet = {
  prefix: 'yupSchema',
  body: [
    'export const ${1:user}Schema = yup.object({',
    '\t${2:name}: ${3:yup.string().required()},',
    '})',
    '',
    'export type ${1/(.*)/${1:/capitalize}/} = yup.InferType<typeof ${1:user}Schema>',
    '',
  ],
  description: 'Yup v1 schema',
};
