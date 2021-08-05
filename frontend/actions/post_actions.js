import * as PostAPIUtil from '../util/post_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const REMOVE_POST_ERRORS = 'REMOVE_POST_ERRORS';

//ACTION CREATORS
export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const removePostErrors = () => ({
    type: REMOVE_POST_ERRORS
});

//THUNK ACTION CREATORS
export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post).then(post => {
        dispatch(receivePost(post))
    }, err => (
        dispatch(receivePostErrors(err.responseJSON))
    ))
);

export const fetchPosts = () => dispatch => (
    PostAPIUtil.fetchPosts().then(posts => {
        dispatch(receivePosts(posts))
    })
);

export const fetchPost = (postId) => dispatch => (
    PostAPIUtil.fetchPost(postId).then(post => {
        dispatch(receivePost(post))
    }, err => (
        dispatch(receivePostErrors(err.responseJSON))
    ))
);