/*eslint-disable*/
//@ts-nocheck

/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { IntlProvider } from 'react-intl-next';
import MainPage from './MainPageUI/mainPage';

ReactDOM.render(
  <IntlProvider locale="en">
    <MainPage/>
  </IntlProvider>,
  document.getElementById('root'),
);

