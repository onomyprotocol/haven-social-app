import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'components/UI'
import { theme } from 'utils/colors'

addDecorator(s => <ThemeProvider theme={theme}><GlobalStyle />{s()}</ThemeProvider>);
configure(require.context('../src/components', true, /\.stories\.js$/), module);
