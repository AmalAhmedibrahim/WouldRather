import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setAuthedUser } from '../actions/authedUser';



class Login extends Component {
	handleSubmit = (e) => {
		const userID = this.userID.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (userID !== '') {
			dispatch(setAuthedUser(userID));
		}
	};
	render() {
		debugger;
		const { userNames } = this.props;
		return (
			<div className="login-container">

				<Form className="login-form" onSubmit={this.handleSubmit}>
					<Form.Label>Username</Form.Label>

					<Form.Control
						as="select"
						ref={(id) => (this.userID = id)}
					>
						<option value="">Select user</option>
						{userNames.map((item) => (
							<option value={item.value} key={item.value}>
								{item.label}
							</option>
						))}
					</Form.Control>


					<Button type="submit" variant="primary">Login</Button>
				</Form>
			</div>
		);
	}
}


function mapStateToProps({ users }) {
	debugger;
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login);

