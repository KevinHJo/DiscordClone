import { connect } from "react-redux";
import ServerShow from './server_show';
import { fetchServer } from '../../actions/server_actions'

const mSTP = (state, { match }) => ({
    serverId: parseInt(match.params.serverId),
    channelId: parseInt(match.params.channelId),
    server: state.entities.servers[match.params.serverId],
    channel: state.entities.channels[match.params.channelId],
    users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
    fetchServer = serverId => dispatch(fetchServer(serverId))
});

export default connect(mSTP, mDTP)(ServerShow)