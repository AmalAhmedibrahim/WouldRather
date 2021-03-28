import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { handleAddAnswer } from '../actions/questions';
import { Redirect } from 'react-router-dom';


class ScoreList extends Component {
    render() {
        debugger;
        const { sortedUsersList } = this.props;
        return (
            <div className="card-container">
                {sortedUsersList.map(user => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`/${user.avatarURL}`} />
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>
                                <div>Answered Questions : {Object.keys(user.answers).length}</div>
                                <div>Created questions : {user.questions.length}</div>
                                <h6>Total Score  : {Object.keys(user.answers).length + user.questions.length}</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}

            </div>
        )
    }
}
function mapStateToProps({ users }) {
    debugger;
    let sortedUsersList = Object.keys(users).map(user => users[user]).sort
        ((id1, id2) => id2.questions.length + Object.keys(id2.answers).length -
            (id1.questions.length + Object.keys(id1.answers).length)
        );

    return {
        sortedUsersList
    }

}
export default connect(mapStateToProps)(ScoreList);
