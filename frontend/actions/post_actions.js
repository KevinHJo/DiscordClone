import * as PostAPIUtil from '../util/post_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
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

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const removePostErrors = () => ({
    type: REMOVE_POST_ERRORS
});