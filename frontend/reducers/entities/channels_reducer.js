import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from '../../actions/channel_actions'

const ChannelsReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CHANNEL:
            nextState[action.channel.id] = action.channel;
        case RECEIVE_CHANNELS:
            return action.channels;
        case REMOVE_CHANNEL:
            delete nextState[action.channelId]
            return nextState;
        default:
            return state;
    }
}

export default ChannelsReducer;