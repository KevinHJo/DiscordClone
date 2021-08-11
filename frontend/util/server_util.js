export const fetchChannels = () => (
    $.ajax({
        method: 'GET',
        url: '/api/servers'
    })
);

export const fetchChannel = (channelId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/servers/${channelId}`
    })
}

export const createChannel = channel => (
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: { channel }
    })
);

export const removeChannel = channelId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/servers/${channelId}`,
    })
);