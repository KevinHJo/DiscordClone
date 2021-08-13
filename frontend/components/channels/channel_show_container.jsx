import { connect } from "react-redux";
import ChannelShow from './channel_show';
import { fetchChannel } from '../../actions/channel_actions'

const mSTP = (state, ownProps) => ({
    channelId: ownProps.channelId,
    channel: state.entities.channels[ownProps.channelId],
    users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
});

export default connect(mSTP, mDTP)(ChannelShow)