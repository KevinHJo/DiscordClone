import { connect } from 'react-redux';
import { receivePost, receivePosts, removePost } from '../../actions/post_actions'
import { receiveUsers } from '../../actions/user_actions'
import ChannelPosts from './channel_posts'

const mSTP = (state, ownProps) => {
    return {
        posts: Object.values(state.entities.posts),
        channelId: ownProps.channelId,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    receivePost: post => dispatch(receivePost(post)),
    receivePosts: posts => dispatch(receivePosts(posts)),
    removePost: postId => dispatch(removePost(postId)),
    receiveUsers: users => dispatch(receiveUsers(users))
})

export default connect(mSTP, mDTP)(ChannelPosts)