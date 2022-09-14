import { FILENAME_CAMELCASE, FILENAME_PASCALCASE } from '../constants';
import { Snippet } from '../types';

export const reactFnComp: Snippet = {
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

export const reactFnCompExport: Snippet = {
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

export const reactFnCompNoExport: Snippet = {
  prefix: 'rFCne',
  body: [
    `function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Functional Component',
};

export const reactFnCompPropTypes: Snippet = {
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

export const reactFnCompPropTypesChldrn: Snippet = {
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

export const reactArrowFnComp: Snippet = {
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

export const reactArrowFnCompExport: Snippet = {
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

export const reactArrowFnCompNoExport: Snippet = {
  prefix: 'rAFCne',
  body: [
    `const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<${2:div}>${3:$1}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Arrow Function Component',
};

export const reactArrowFnCompPropTypes: Snippet = {
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

export const reactArrowFnCompPropTypesChldrn: Snippet = {
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

export const reactLazy: Snippet = {
  prefix: '_rLazy',
  body: [
    '${TM_SELECTED_TEXT/(import )(\\w+)( from )([^;\r\n]+)([;])?/const $2 = lazy(() => import($4))$5/g}',
  ],
  description: 'Convert import to React.lazy import',
};
