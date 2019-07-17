import * as React from 'react';
import { Switch, Route } from 'react-router';
import ReactHelmet from 'react-helmet';
import 'sanitize.css';
import '../themes/v1/scss/style.scss';

import Home from '../pages/Home';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<ReactHelmet titleTemplate="React SPA Example - %s" defaultTitle="React SPA example by elray72">
				<meta name="description" content="React SPA example. Built on Typescript and Redux." />
			</ReactHelmet>
			<main className="main">
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</main>
		</React.Fragment>
	);
};

export default App;
