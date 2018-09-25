import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as postsActions from '../actions/postsActions';
// Child components
import PostForm from '../components/PostForm';

class EditPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.postForm.syncErrors) {
            let post = Object.assign({}, this.props.postForm.values, {
                id: this.props.currentPost.id,
            });
            this.props.actions.editPost(post);
            this.setState({formStatus: 'success'});
        } else {
            this.setState({formStatus: 'error'});
        }
    }

    render() {
        return (
            this.props.ajaxLoading ?
                <p className="text-center alert alert-info">Loading post...</p>
                :
                !this.props.currentPost ?
                    <p className="text-center alert alert-danger">Post not found.</p>
                    :
                    <div className="add-post container">
                        <h1 className="text-center text-capitalize">Edit post information</h1>
                        <PostForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus}
                                      initialValues={this.props.currentPost} goBack={this.props.goBack} />
                    </div>
        )
    }
}

function findCurrentPost(posts, id = -1) {
    return posts.find(post => {
        return parseInt(post.id, 10) === parseInt(id, 10);
    });
}

function mapStateToProps(state, ownProps) {
    let currentPost = state.posts.length ? findCurrentPost(state.posts, ownProps.match.params.id) : null;
    return {
        currentPost,
        postForm: state.form.post,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);