import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Routing from '../components/Routing'
import Login from '../components/Login';

import { handleInitialData } from '../actions/shared';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authedUser } = this.props;


		return (
			<Fragment>{!authedUser ? <Login /> : <Routing/>}</Fragment>
		)


	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser,

	};
}

export default connect(mapStateToProps)(App);

