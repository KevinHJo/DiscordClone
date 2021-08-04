import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions'
import PostIndex from './post_index'

const mSTP = state => ({
    posts: state.entities.posts.values
})

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(PostIndex)