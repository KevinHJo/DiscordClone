import { RECEIVE_POST_ERRORS, REMOVE_POST_ERRORS } from '../../actions/post_actions'

const PostErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors
        case REMOVE_POST_ERRORS:
            return [];
        default:
            return state;
    }
}

export default PostErrorsReducer;