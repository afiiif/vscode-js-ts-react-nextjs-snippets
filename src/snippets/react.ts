import { FILENAME_PASCALCASE, FILENAME_CAMELCASE } from '../constants';
import { Snippet } from '../types';

export const reactFunctionalComp: Snippet = {
  prefix: 'rFC',
  body: [
    `export default function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Functional Component',
};

export const reactFunctionalCompExport: Snippet = {
  prefix: 'rFCe',
  body: [
    `function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1}</$2>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Functional Component',
};

export const reactFunctionalCompWithPropTypes: Snippet = {
  prefix: 'rFCp',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1}</$2>',
    '\t)',
    '}',
    '',
    '$1.propTypes = {}',
  ],
  description: 'React Functional Component with PropTypes',
};

export const reactFunctionalCompWithPropTypesChildren: Snippet = {
  prefix: 'rFCpch',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}({ children }) {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:{ children \\}}</$2>',
    '\t)',
    '}',
    '',
    '$1.propTypes = {',
    '\tchildren: PropTypes.node.isRequired',
    '}',
  ],
  description: 'React Functional Component with PropTypes',
};

export const reactArrowFunctionComp: Snippet = {
  prefix: 'rAFC',
  body: [
    `export const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Arrow Function Component',
};

export const reactArrowFunctionCompExport: Snippet = {
  prefix: 'rAFCe',
  body: [
    `const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1}</$2>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component',
};

export const reactArrowFunctionCompWithPropTypes: Snippet = {
  prefix: 'rAFCp',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1}</$2>',
    '\t)',
    '}',
    '',
    '$1.propTypes = {}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component with PropTypes',
};

export const reactArrowFunctionCompWithPropTypesChildren: Snippet = {
  prefix: 'rAFCpch',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `const \${1:${FILENAME_PASCALCASE}} = ({ children }) => {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:{ children \\}}</$2>',
    '\t)',
    '}',
    '',
    '$1.propTypes = {',
    '\tchildren: PropTypes.node.isRequired',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component with PropTypes',
};

export const hocComponent: Snippet = {
  prefix: ['hoc', 'rHOC'],
  body: [
    `export default function \${1:${FILENAME_CAMELCASE}}(WrappedComponent) {$0`,
    '\tconst Component = (props) => {',
    '\t\treturn <WrappedComponent {...props} />',
    '\t}',
    '',
    '\treturn Component',
    '}',
  ],
  description: 'React HOC',
};
