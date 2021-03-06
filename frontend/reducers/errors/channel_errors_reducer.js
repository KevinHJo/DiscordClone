import { RECEIVE_CHANNEL_ERRORS } from '../../actions/channel_actions'

const ChannelErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CHANNEL_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default ChannelErrorsReducer;