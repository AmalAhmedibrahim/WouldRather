import { RECEIVE_USERS } from '../actions/users'
import { ADD_ANSWER , ADD_QUESTION} from '../actions/questions'

export default function users(state = {}, action) {
    debugger;
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_ANSWER: 
			return {
				...state,
				[action.authedUser]: {
			        ...state[action.authedUser],
			        answers: {
			        	...state[action.authedUser].answers,
			            [action.qid]: action.answer
			        }
			    }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat([action.id])
                }
            }
        default:
            return state
    }
}