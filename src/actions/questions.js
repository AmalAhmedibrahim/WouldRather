import {  saveQuestionAnswer,saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER= 'ADD_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion({ id, timestamp, author, optionOne, optionTwo }) {
    debugger;
    return {
        type: ADD_QUESTION,
        id,
        timestamp,
        author,
        optionOne,
        optionTwo
    }
}


function addAnswer({ authedUser, qid, answer }) {
    return {
        type: ADD_ANSWER,
        authedUser, 
        qid, 
        answer
    }
}


export function handleAddQuestion(optionOne, optionTwo) {
    debugger;
    return (dispatch, getState) => {
        const { authedUser } = getState();

        const questionData = {
            optionOne,
            optionTwo,
            author: authedUser
        }
        return saveQuestion(questionData)
            .then((question) => {
                console.log('created QUESTION', question);
debugger;
                dispatch(addQuestion(question))
            })
    }
}
 


export function handleAddAnswer(answer) {
    debugger;
    return (dispatch) => {

        dispatch(addAnswer(answer));
        
        return saveQuestionAnswer(answer);
    }
}


