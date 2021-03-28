import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends Component {
    state = {
		Home: false
	};
    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
       const optionOne =this.questionForm[0].value;
       const optionTwo =this.questionForm[1].value;
       const { dispatch, id } = this.props;
       
    if(optionOne != "" && optionTwo !== "") {
        dispatch(handleAddQuestion(optionOne, optionTwo)).then((question)=>{
            debugger;
            this.setState({
               
                Home: true
              })
        })
        
    }


    };
  
  
    render() {
        const { question, author } = this.props;
        const { Home } = this.state;

		if (Home === true) return <Redirect to="/" />;
        return (
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Form className="question-form" onSubmit={(e) => this.handleSubmit(e)} ref={(f) => (this.questionForm = f)}>
                        <h3>Would You Rather </h3>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="OptionOne" placeholder="Option One.." id={'optionOne'}/>
                               
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="OptionTwo" placeholder="Option Two.."  id={'optionTwo'} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Question
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    debugger;

}

export default connect(mapStateToProps)(AddQuestion);