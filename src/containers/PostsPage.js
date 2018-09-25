import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../actions/postsActions';
import PostList from '../components/PostList';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);

    }
    


        
    deletePost(id) {
        if (window.confirm('Are you sure you want to delete this post?')) {
            this.props.actions.deletePost(id);
        }
    }



    render() {
// console.log('state.posts', this.state.posts);        
        return (
            <div className="container posts">
    
           {
                    this.props.ajaxLoading ?
                        <p className="text-center alert alert-info">Loading posts...</p>
                        :
                        <PostList posts={this.props.posts}
                                      onDeletePost={this.deletePost} />
                }
            </div>

        )
    }
}

function mapStateToProps(state, ownProps) {
    // console.log('state.posts', state.posts);
    
    let posts = state.posts;
    
    return {
        posts: posts,
        ajaxLoading: state.ajaxLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);