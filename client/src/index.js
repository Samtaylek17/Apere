import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import 'antd/dist/antd.css';
import './styles/style.css';

ReactDOM.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
	document.querySelector('#root')
);
