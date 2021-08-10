import { connect } from "react-redux";
import ChannelShow from './channel_show';
import { fetchChannels } from '../../actions/channel_actions'

const mSTP = (state, { match }) => ({
    serverId: parseInt(match.params.serverId),
    channelId: parseInt(match.params.channelId),
    channels: state.entities.channels
});

const mDTP = dispatch => ({
    fetchChannel: () => dispatch(fetchChannels())
});

export default connect(mSTP, mDTP)(ChannelShow)