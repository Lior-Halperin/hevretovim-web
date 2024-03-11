import { DefaultTheme } from 'styled-components';
import baseTheme from './baseTheme';

const darkTheme: DefaultTheme = {// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
  ...baseTheme,
  colors: {
    background: '#343a40',
    text: '#FFFFFF',
    primary: '#007bff',
    secondary: '#6c757d',
    border: '#495057',
  },
};

export default darkTheme;
