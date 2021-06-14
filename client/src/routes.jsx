import React, { Suspense, lazy, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataContext } from './store/context';
import reducers, { initialState } from './store/reducers';
import { Spin } from 'antd';

const App = lazy(() => import('./App'));

export default function Routes() {
	const [state, dispatch] = useReducer(reducers, initialState);

	return (
		<DataContext.Provider value={{ state, dispatch }}>
			<Router>
				<Suspense fallback={<Spin />}>
					<Switch>
						<Route exact path='/' component={App} />
					</Switch>
				</Suspense>
			</Router>
		</DataContext.Provider>
	);
}
