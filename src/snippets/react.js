const { FILENAME_PASCALCASE } = require('../constants');

exports.reactFunctionalComponent = {
  prefix: '$rfc',
  body: [
    `export default function \${1:${FILENAME_PASCALCASE}}() {`,
    '\treturn (',
    '\t\t<${2:div}>${0:$1 Component}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Functional Component',
};

exports.reactFunctionalExportComponent = {
  prefix: '$rfce',
  body: [
    `function \${1:${FILENAME_PASCALCASE}}() {`,
    '\treturn (',
    '\t\t<${2:div}>${0:$1 Component}</$2>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Functional Component',
};

exports.reactFunctionalComponentWithPropTypes = {
  prefix: '$rfcp',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}() {`,
    '\treturn (',
    '\t\t<${2:div}>${0:$1 Component}</$2>',
    '\t)',
    '}',
    '',
    '$1.propTypes = {}',
  ],
  description: 'React Functional Component with PropTypes',
};

exports.reactFunctionalComponentWithPropTypesChildren = {
  prefix: '$rfcpch',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}({ children }) {`,
    '\treturn (',
    '\t\t<${2:div}>${0:{ children \\}}</$2>',
    '\t)',
    '}',
    '',
    '$1.propTypes = {',
    '\tchildren: PropTypes.node.isRequired',
    '}',
  ],
  description: 'React Functional Component with PropTypes',
};

exports.reactArrowFunctionComponent = {
  prefix: '$rafc',
  body: [
    `export const \${1:${FILENAME_PASCALCASE}} = () => {`,
    '\treturn (',
    '\t\t<${2:div}>${0:$1 Component}</$2>',
    '\t)',
    '}',
  ],
  description: 'React Arrow Function Component',
};

exports.reactArrowFunctionExportComponent = {
  prefix: '$rafce',
  body: [
    `const \${1:${FILENAME_PASCALCASE}} = () => {`,
    '\treturn (',
    '\t\t<${2:div}>${0:$1 Component}</$2>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component',
};

exports.reactArrowFunctionComponentWithPropTypes = {
  prefix: '$rafcp',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `const \${1:${FILENAME_PASCALCASE}} = () => {`,
    '\treturn (',
    '\t\t<${2:div}>${0:$1 Component}</$2>',
    '\t)',
    '}',
    '',
    '$1.propTypes = {}',
    '',
    'export default $1',
  ],
  description: 'React Arrow Function Component with PropTypes',
};

exports.reactArrowFunctionComponentWithPropTypesChildren = {
  prefix: '$rafcpch',
  body: [
    "import PropTypes from 'prop-types'",
    '',
    `const \${1:${FILENAME_PASCALCASE}} = ({ children }) => {`,
    '\treturn (',
    '\t\t<${2:div}>${0:{ children \\}}</$2>',
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
