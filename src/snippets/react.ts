import { FILENAME_PASCALCASE, FILENAME_CAMELCASE } from '../constants';
import { Snippet } from '../types';

export const reactFunctionalComp: Snippet = {
  prefix: 'rfc',
  body: [
    `export default function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1 Component}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Functional Component',
};

export const reactFunctionalCompExport: Snippet = {
  prefix: 'rfce',
  body: [
    `function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1 Component}</$2>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Functional Component',
};

export const reactFunctionalCompWithPropTypes: Snippet = {
  prefix: 'rfcp',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1 Component}</$2>',
    '\t)',
    '}',
    '',
    '$1.propTypes = {}',
  ],
  description: 'React Functional Component with PropTypes',
};

export const reactFunctionalCompWithPropTypesChildren: Snippet = {
  prefix: 'rfcpch',
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
  prefix: 'rafc',
  body: [
    `export const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1 Component}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Arrow Function Component',
};

export const reactArrowFunctionCompExport: Snippet = {
  prefix: 'rafce',
  body: [
    `const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1 Component}</$2>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component',
};

export const reactArrowFunctionCompWithPropTypes: Snippet = {
  prefix: 'rafcp',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1 Component}</$2>',
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
  prefix: 'rafcpch',
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
  prefix: 'hoc',
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
