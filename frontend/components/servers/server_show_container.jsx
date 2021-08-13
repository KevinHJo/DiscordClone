import { connect } from "react-redux";
import ServerShow from './server_show';
import { fetchServer } from '../../actions/server_actions'
import { createChannel } from "../../actions/channel_actions";
import { logout } from '../../actions/session_actions'

const mSTP = (state, { match }) => {
    return {
    channelId: parseInt(match.params.channelId),
    serverId: parseInt(match.params.serverId),
    server: state.entities.servers[match.params.serverId],
    currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    createChannel: channel => dispatch(createChannel(channel)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(ServerShow)