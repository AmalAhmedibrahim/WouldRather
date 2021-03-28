import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Naving from './Nav';
import Home from './home';
import QuestionPage from './QuestionPage';
import NotFound from './NotFound';
import AddQuestion from './AddQuestion';
import ScoreList from './ScoreList';







class Routing extends Component {
	render() {
		return (
			<Router>
				<Container>
					<Naving />
					<main>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/home" exact component={Home} />

							<Route path="/question/:id" component={QuestionPage} />
							<Route path="/add" component={AddQuestion} />
							<Route path="/scorelist" component={ScoreList} />
							<Route path="/notfound" component={NotFound} />
							<Route component={NotFound} />
						</Switch>
					</main>
				</Container>
			</Router>
		);
	}
}

export default Routing;
