import { connect } from "react-redux";
import ChannelShow from './channel_show';

const mSTP = (state, { match }) => ({
    serverId: parseInt(match.params.serverId),
    channelId: parseInt(match.params.channelId),
    channels: Object.values(state.entities.channels),
    users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(ChannelShow)