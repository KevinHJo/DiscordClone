export const fetchChannels = () => (
    $.ajax({
        method: 'GET',
        url: '/api/channels'
    })
);

export const fetchChannel = (channelId) => (
    $.ajax({
        method: 'GET',
        url: `/api/channels/${channelId}`
    })
)

export const createChannel = channel => (
    $.ajax({
        method: 'POST',
        url: '/api/channels',
        data: { channel }
    })
);

export const removeChannel = channelId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/channels/${channelId}`,
    })
);