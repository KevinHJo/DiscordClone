import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USERS } from '../../actions/user_actions'

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            action.users.forEach(user => nextState[user.id] = user);
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        default:
            return state;
    }
}

export default UsersReducer;