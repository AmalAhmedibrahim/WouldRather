import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { logoutAuthedUser } from '../actions/authedUser';

function Naving(props) {
	const { user, dispatch } = props;

	const handleLogout = () => {
		dispatch(logoutAuthedUser());
	};

	return (
		<Fragment>
			<Navbar className="navrbar-container">
					<Nav className="nav-left">
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to="/scorelist">
						ScoreList
						</Nav.Link>
					</Nav>
					<Nav className="nav-right">
						<Navbar.Text>{user.name}</Navbar.Text>
						
						<Button onClick={handleLogout} variant="primary">
							Logout
						</Button>
					</Nav>
				
			</Navbar>
		</Fragment>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(Naving);
