import { connect } from "react-redux";
import ChannelShow from './channel_show';
import { fetchChannel } from '../../actions/channel_actions'

const mSTP = (state, { match }) => ({
    serverId: parseInt(match.params.serverId),
    channelId: parseInt(match.params.channelId),
    channels: Object.values(state.entities.channels),
    users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
});

export default connect(mSTP, mDTP)(ChannelShow)