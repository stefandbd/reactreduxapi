import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function postsReducer(state = initialState.posts, action) {
    switch (action.type) {
        case types.SET_POSTS:
            return action.posts;
        case types.ADD_POST:
            return [
                ...state,
                Object.assign({}, action.post)
            ];
        case types.EDIT_POST:
            return [
                ...state.filter(post => post.id !== action.post.id),
                Object.assign({}, action.post)
            ];
        case types.DELETE_POST:
            return [
                ...state.filter(post => post.id !== action.id)
            ];
        default:
            return state;
    }
}