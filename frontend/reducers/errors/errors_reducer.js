import { combineReducers } from 'redux';
import SessionErrorsReducer from "./session_errors_reducer";
import PostErrorsReducer from './post_errors_reducer'

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    post: PostErrorsReducer
});

export default ErrorsReducer;