const { FILENAME_PASCALCASE } = require('../constants');

exports.reactFunctionalComp = {
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

exports.reactFunctionalCompExport = {
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

exports.reactFunctionalCompWithPropTypes = {
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

exports.reactFunctionalCompWithPropTypesChildren = {
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

exports.reactArrowFunctionComp = {
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

exports.reactArrowFunctionCompExport = {
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

exports.reactArrowFunctionCompWithPropTypes = {
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

exports.reactArrowFunctionCompWithPropTypesChildren = {
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
