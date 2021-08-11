export const fetchUserServers = userId => ({
    method: 'GET',
    url: 'api/servers',
    data: {userId}
})