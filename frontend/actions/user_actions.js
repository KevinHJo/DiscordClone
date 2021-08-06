export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

// export const fetchUsers = () => dispatch => {
//     debugger
//     console.dir(SessionAPIUtil.fetchUsers())
//     return SessionAPIUtil.fetchUsers().then(users => {
//         dispatch(receiveUsers(users))
//     })
// };