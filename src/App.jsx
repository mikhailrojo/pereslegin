import React from 'react';


import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Calendar} from './components/Calendar/index';
import {Intro} from './components/Intro';
import {Contacts} from './components/Contacts';
import {Media} from './components/Media';

export const App = () => (
	<Router basename='pereslegin/dist'>
		<div>
			<Switch>
				<Route path='/' exact>
					<Intro />
				</Route>
				<Route path='/calendar'>
					<Calendar />
				</Route>
				<Route path='/contacts'>
					<Contacts />
				</Route>
				<Route path='/media'>
					<Media />
				</Route>
			</Switch>
		</div>
	</Router>
);

