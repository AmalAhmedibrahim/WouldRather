import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Question from './Question';

class QuestionList extends Component {

    render() {
        const { answeredQuesIds, unansweredQuesIds } = this.props;
        debugger;
        return (
            <Tabs defaultActiveKey="answered" id="uncontrolled-tab-example" >
                <Tab eventKey="unanswered" title="answered questions">
                  <div  className="tab-content">
                    {answeredQuesIds.map(id => (
                    <span key={id} className="question-card" >
                      <Link to={`/question/${id}`}>
                        <Question key={id} id={id} />
                      </Link>
                    </span>
                  ))}
                  </div>
                </Tab>
                <Tab eventKey="answered" title="unanswered questions">
                <div  className="tab-content">

                {unansweredQuesIds.map(id => (
                <span key={id} className="question-card">
                  <Link to={`/question/${id}`}>
                    <Question key={id} id={id} />
                  </Link>
                </span>
              ))}
                </div>
                </Tab>
            </Tabs>
        );
    }
}

export default QuestionList;
