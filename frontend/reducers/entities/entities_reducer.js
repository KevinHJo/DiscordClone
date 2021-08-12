import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PostsReducer from './posts_reducer';
import ChannelsReducer from './channels_reducer';
import ServersReducer from './servers_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    servers: ServersReducer,
    channels: ChannelsReducer
});

export default EntitiesReducer;