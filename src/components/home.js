import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';

class Home extends Component {

    render() {
        const { users, authedUser, answeredQuesIds, unansweredQuesIds } = this.props;

        return (
            <Fragment>
                <QuestionList
                    answeredQuesIds={answeredQuesIds}
                    unansweredQuesIds={unansweredQuesIds}
                />
            </Fragment>
        )

    }
}
function mapStateToProps({ users, authedUser, questions }) {
    debugger;
    let unansweredQuesIds = [];

    let answeredQuesIds = Object.keys(users[authedUser].answers);

    let questionIds = Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    questionIds.map(
        id => !answeredQuesIds.includes(id) && unansweredQuesIds.push(id)
    );
    debugger;
    return {
        users,
        authedUser,
        questions,
        questionIds,
        answeredQuesIds,
        unansweredQuesIds
    }
}

export default connect(mapStateToProps)(Home);
