export const fetchUserServers = userId => (
    $.ajax({
        method: 'GET',
        url: 'api/servers',
        data: {userId}
    })
);

export const fetchServer = serverId => (
    $.ajax({
        method: 'GET',
        url: `api/servers/${serverId}`
    })
);

export const createServer = server => (
    $.ajax({
        method: 'POST',
        url: 'api/servers',
        data: {server}
    })
);

export const deleteServer = serverId => (
    $.ajax({
        method: 'DELETE',
        url: `api/servers/${serverId}`
    })
);