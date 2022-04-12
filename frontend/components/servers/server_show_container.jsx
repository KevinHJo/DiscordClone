import { connect } from "react-redux";
import ServerShow from './server_show';
import { fetchServer, fetchUserServers } from '../../actions/server_actions'
import { createChannel, fetchChannel, removeChannel } from "../../actions/channel_actions";
import { logout } from '../../actions/session_actions'

const mSTP = (state, { match }) => {
    // debugger
    return {
    channelId: parseInt(match.params.channelId),
    serverId: parseInt(match.params.serverId),
    channel: state.entities.channels[match.params.channelId],
    server: state.entities.servers[match.params.serverId],
    userServers: Object.values(state.entities.servers),
    currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchUserServers: userId => dispatch(fetchUserServers(userId)),
    createChannel: channel => dispatch(createChannel(channel)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    removeChannel: (channelId) => dispatch(removeChannel(channelId)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(ServerShow)