import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Reducers
import posts from './postsReducer';
import ajaxLoading from './ajaxLoadingReducer';

const rootReducer = combineReducers({
    posts,
    ajaxLoading,
    form: formReducer
});

export default rootReducer;