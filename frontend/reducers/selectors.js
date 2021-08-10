export const selectChannel = ({channels}, channelId) => {
    return channels[channelId] || { name: '' }
}