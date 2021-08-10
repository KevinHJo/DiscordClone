import { connect } from "react-redux";
import ChannelShow from './channel_show';
import { fetchUsers } from "../../actions/user_actions";

const mSTP = (state, { match }) => ({
    serverId: parseInt(match.params.serverId),
    channelId: parseInt(match.params.channelId),
    channels: Object.values(state.entities.channels),
    users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mSTP, mDTP)(ChannelShow)