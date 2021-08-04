import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer
});

export default EntitiesReducer;