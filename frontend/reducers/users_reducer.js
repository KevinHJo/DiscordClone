import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            Object.assign({}, nextState, { [action.user.id]: action.user })
            return nextState;
        default:
            return state;
    }
}

export default UsersReducer;