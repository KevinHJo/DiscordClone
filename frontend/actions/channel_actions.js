import * as ChannelAPIUtil from '../util/channel_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS'

//ACTION CREATORS
const receiveChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
});

const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const removeChannel = (channelId) => ({
    type: REMOVE_CHANNEL,
    channelId
});

const receiveChannelErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

//THUNK ACTION CREATORS
export const fetchChannels = () => dispatch => {
    return ChannelAPIUtil.fetchChannels().then(channels => (
        dispatch(receiveChannels(channels))
    ))
};

export const fetchChannel = channelId => dispatch => {
    return ChannelAPIUtil.fetchChannel(channelId).then(channel => (
        dispatch(receiveChannel(channel))
    ))
};

export const createChannel = channel => dispatch => (
    ChannelAPIUtil.createChannel(channel).then(channel => {
        dispatch(receiveChannel(channel))
    }, err => (
        dispatch(receiveChannelErrors(err.responseJSON))
    ))
);

export const deleteChannel = channelId => dispatch => (
    ChannelAPIUtil.removeChannel(channelId).then(() => (
        dispatch(removeChannel(channelId))
    ))
);
