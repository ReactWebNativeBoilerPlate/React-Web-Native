import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/web/containers/Root';
import configureStore from './app/store/configureStore';
import { HashRouter } from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';


const reduxStore = configureStore();

const App = () => (

    <Root store={reduxStore} />

);
ReactDOM.render(
    <I18nextProvider i18n={i18next}>
<HashRouter>
    <App />
</HashRouter></I18nextProvider>, document.getElementById('root'));