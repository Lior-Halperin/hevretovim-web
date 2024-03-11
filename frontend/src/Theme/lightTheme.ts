import { DefaultTheme } from 'styled-components';
import baseTheme from './baseTheme';

const lightTheme: DefaultTheme = { //Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
  ...baseTheme,
  colors: {
    background: '#FFFFFF',
    text: '#333333',
    primary: '#007bff',
    secondary: '#6c757d',
    border: '#dee2e6',
  },
};

export default lightTheme;
