import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { handleAddAnswer } from '../actions/questions';
import { Redirect } from 'react-router-dom';


class QuestionPage extends Component {
    handleSubmit = (e) => {
        debugger;
        let ans = '';
        e.preventDefault();

        const { dispatch, id , authedUser } = this.props;

        if (this.questionForm[0].checked) {
            ans = this.questionForm[0].value;
            dispatch(handleAddAnswer({
                qid:id,
                authedUser,
                answer: ans,
            }));
        } else if (this.questionForm[1].checked) {
            ans = this.questionForm[1].value;
            dispatch(handleAddAnswer({
                qid:id,
                authedUser,
                answer: ans,
            }));
        }




    };
    render() {
        debugger;
        const { question, author, answerd, userAnswer } = this.props;
        if (!question) {
            return <Redirect to="/notfound" />
        }
        const total = question.optionOne.votes.length + question.optionTwo.votes.length;
        const optionOnePercent = Math.round((question.optionOne.votes.length / total ) * 100);
        const optionTwoPercent = Math.round((question.optionTwo.votes.length / total)* 100) ;

        const optionOneValue = question.optionOne.text;
        const optionTwoValue = question.optionTwo.text;

        const optionOneVote = question.optionOne.votes.length;
        const optionTwoVote = question.optionTwo.votes.length;

        if (!question) {
            return <Redirect to="/notfound" />
        }
        return (
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`/${author.avatarURL}`} />
                    <Card.Body>
                        <Card.Title>{author.name} Asks</Card.Title>
                        {answerd == false ? (<Card.Text>
                            <h6>Would you rather</h6>
                            <Form className="answer-form" onSubmit={(e) => this.handleSubmit(e)}
                                ref={(f) => (this.questionForm = f)}>
                                <Form.Check
                                    type={'radio'}
                                    id={'optioOne'}
                                    value={'optionOne'}
                                    name="Qanswer"
                                    label={question.optionOne.text}
                                />

                                <Form.Check
                                    type={'radio'}
                                    id={'optiotwo'}
                                    value={'optionTwo'}
                                    name="Qanswer"
                                    label={question.optionTwo.text}
                                />

                                <Button type="submit" variant="primary">Submit</Button>
                            </Form>
                        </Card.Text>) : (<Card.Text>
                            <div>Result: </div>
                            <div  className={userAnswer === 'optionOne' ? 'result-card answer' : 'result-card'}>
                                {userAnswer === 'optionOne' ?<div className="vote">Your Vote</div> : ''}
                                <div>{optionOneValue}</div>
                                <div>option one Percentage : <b>{optionOnePercent}</b> </div>
                                <div><b>{optionOneVote}</b> Votes</div>
                            </div>

                            <div className={userAnswer === 'optionTwo' ? 'result-card answer' : 'result-card'}>
                            {userAnswer === 'optionTwo' ?<div className="vote">Your Vote</div> : ''}
                               
                                <div>{optionTwoValue}</div>
                                <div>option Two Percentage : <b>{optionTwoPercent}</b> </div>
                                <div><b>{optionTwoVote}</b> Votes</div>
                            </div>
                        </Card.Text>)}
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
function mapStateToProps({ users, questions, authedUser }, { match }) {
    debugger;
    let answerd = false;
    const id = match.params.id;
    const question = questions[id];
    let answeredQuesIds = Object.keys(users[authedUser].answers);
    if (!question) {
        return <Redirect to="/notfound" />
    }
    if (answeredQuesIds.indexOf(id) > -1) {
        answerd = true;
    }
    const author = users[question.author];
    const userAnswer = users[authedUser].answers[id];
    return {
        users,
        questions,
        authedUser,
        question,
        author,
        id,
        userAnswer,
        answerd
    };
}
export default connect(mapStateToProps)(QuestionPage);
