import axios from 'axios';
import * as types from './actionTypes';

export function addPost(post) {
    return { type: types.ADD_POST, post};
}

export function editPost(post) {
    return { type: types.EDIT_POST, post};
}

export function deletePost(id) {
    return { type: types.DELETE_POST, id};
}

export function setPosts(posts) {
    return { type: types.SET_POSTS, posts};
}

export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status};
}

// export function editPost(post) {
//     return dispatch => {
//         dispatch(ajaxLoading(true));
//         axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
//             .then(response => {
//                 dispatch(setPosts(response.data));
//                 dispatch(ajaxLoading(false));
//             })
//             .catch(error => {
//                 console.error(error);
//                 dispatch(ajaxLoading(false));
//             });
//     };
//   }

//   export function addPost(post) {
//     console.log('post ==== ', post);
//     const serverport = {
//         title: post.title,
//         body: post.body
//     }
//     return dispatch => {
//         dispatch(ajaxLoading(true));
//         axios.post('https://jsonplaceholder.typicode.com/posts', {serverport})
//             .then(response => {
//                 dispatch(setPosts(response.data));
//                 dispatch(ajaxLoading(false));
//             })
//             .catch(error => {
//                 console.error(error);
//                 dispatch(ajaxLoading(false));
//             });
//     };
//   }

//   export function deletePost(id) {
//     return dispatch => {
//         dispatch(ajaxLoading(true));
//         axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(response => {
//                 dispatch(ajaxLoading(false));
//             })
//             .catch(error => {
//                 console.error(error);
//                 dispatch(ajaxLoading(false));
//             });
//     };

//   }



export function getPosts() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch(setPosts(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    };
}