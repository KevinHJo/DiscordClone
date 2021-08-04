import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../../actions/post_actions'
import PostIndex from './post_index'

const mSTP = state => ({
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(PostIndex)