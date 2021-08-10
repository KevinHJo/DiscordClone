import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PostsReducer from './posts_reducer';
import ChannelsReducer from './channels_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    channels: ChannelsReducer
});

export default EntitiesReducer;