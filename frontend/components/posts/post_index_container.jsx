import { connect } from 'react-redux';
import { receivePost, receivePosts, removePost } from '../../actions/post_actions'
import PostIndex from './post_index'

const sortPosts = (post1, post2) => {
    if (post1.id < post2.id) {
        return -1
    } else if (post1.id > post2.id) {
        return 1
    } else if (post1.id === post2.id) {
        return 0
    }
}

const mSTP = state => ({
    posts: Object.values(state.entities.posts).sort(sortPosts),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    receivePost: post => dispatch(receivePost(post)),
    receivePosts: posts => dispatch(receivePosts(posts)),
    removePost: postId => dispatch(removePost(postId))
})

export default connect(mSTP, mDTP)(PostIndex)