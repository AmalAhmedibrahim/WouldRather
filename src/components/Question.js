import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Question extends Component {
    render() {
        debugger;
        const { question, author } = this.props;
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/${author.avatarURL}`} />
            <Card.Body>
                <Card.Title>{author.name} want to know</Card.Title>
                <Card.Text>
                <div>Would you rather</div>
                <div>{question.optionOne.text}</div>
                </Card.Text>
                <Button variant="primary">View Question</Button>
            </Card.Body> 
            </Card>

        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    debugger;
  
    const question = questions[id];
    const author =users[question.author];
   
    
    return {
        authedUser,
        question,
        author,
        id,
        author 
    }
}

export default connect(mapStateToProps)(Question);