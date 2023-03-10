import { Snippet } from '../types';

export const rhfUseForm: Snippet = {
  prefix: ['useForm', 'rhf'],
  body: [
    'const { ${1:register, control, handleSubmit, formState: { errors \\}} } = useForm$2($0)',
    'const onSubmit = data => console.log(data)',
  ],
  description: 'React Hook Form `useForm` hook',
};

export const rhfUseFormYup: Snippet = {
  prefix: ['useForm', 'rhfYup'],
  body: [
    'const schema = yup$4.object({',
    '\t${3:// schema fields}',
    '}).required()',
    '',
    'const { ${1:register, control, handleSubmit, formState: { errors \\}} } = useForm$2({',
    '\tresolver: yupResolver(schema)',
    '})',
    'const onSubmit = data => console.log(data)',
  ],
  description: 'React Hook Form `useForm` hook with yupResolver',
};

export const rhfCreateFormProvider: Snippet = {
  prefix: ['useForm', 'rhfProv'],
  body: [
    'const methods = useForm$1($2)',
    'const onSubmit = data => console.log(data)',
    '',
    'return (',
    '\t<FormProvider {...methods} >',
    '\t\t<form onSubmit={methods.handleSubmit(onSubmit)}>',
    '\t\t\t${0:<NestedInputs />}',
    '\t\t</form>',
    '\t</FormProvider>',
    ')',
  ],
  description: 'React Hook Form create form with `FormProvider`',
};
