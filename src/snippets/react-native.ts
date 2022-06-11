import { FILENAME_PASCALCASE } from '../constants';
import { Snippet } from '../types';

export const reactNativeFunctionalComp: Snippet = {
  prefix: 'rnFC',
  body: [
    "import React from 'react'",
    "import { View, Text } from 'react-native'",
    '',
    `export default function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<View>',
    '\t\t\t<Text>${2:$1}</Text>',
    '\t\t</View>',
    '\t)',
    '}',
  ],
  description: 'React Native Functional Component',
};

export const reactNativeFunctionalCompExport: Snippet = {
  prefix: 'rnFCe',
  body: [
    "import React from 'react'",
    "import { View, Text } from 'react-native'",
    '',
    `function \${1:${FILENAME_PASCALCASE}}() {$0`,
    '\treturn (',
    '\t\t<View>',
    '\t\t\t<Text>${2:$1}</Text>',
    '\t\t</View>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Native Functional Component',
};

export const reactNativeArrowFunctionComp: Snippet = {
  prefix: 'rnAFC',
  body: [
    "import React from 'react'",
    "import { View, Text } from 'react-native'",
    '',
    `export const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<View>',
    '\t\t\t<Text>${2:$1}</Text>',
    '\t\t</View>',
    '\t)',
    '}',
  ],
  description: 'React Native Arrow Function Component',
};

export const reactNativeArrowFunctionCompExport: Snippet = {
  prefix: 'rnAFCe',
  body: [
    "import React from 'react'",
    "import { View, Text } from 'react-native'",
    '',
    `const \${1:${FILENAME_PASCALCASE}} = () => {$0`,
    '\treturn (',
    '\t\t<View>',
    '\t\t\t<Text>${2:$1}</Text>',
    '\t\t</View>',
    '\t)',
    '}',
    '',
    'export default $1',
  ],
  description: 'React Native Arrow Function Component',
};
