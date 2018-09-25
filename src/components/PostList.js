import React from 'react';
import {NavLink} from 'react-router-dom';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import InfiniteScroll from "react-infinite-scroll-component";
    


class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts.slice(0,10),
            count: 0,
        };
    }

    fetchMoreData = () => {
        setTimeout(() => {
          this.setState({
            count: this.state.count + 10,
            posts: this.state.posts.concat(this.props.posts.slice(this.state.count+10,this.state.count+20))
          });
        }, 1500);
      };


    render() {
       console.log(' this.state.posts --- ', this.state.posts);
       
    return (
        !this.props.posts.length ?
            <p className="alert alert-warning text-center">No posts found.</p>
            :
            <InfiniteScroll
            dataLength={this.state.posts.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <div className="post-list">
                <div className="responsive-table">
                  
                        {this.state.posts.map(post =>
                        <div key={post.id}>
         
                                    <Card>
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardSubtitle>User: {post.userId}</CardSubtitle>
          <CardText>{post.body}</CardText>
          <NavLink className="btn btn-primary edit-btn"
                                             to={'/edit/' + post.id}>Edit</NavLink>
          <Button onClick={() => this.props.onDeletePost(post.id)}>Delete</Button>
        </CardBody>
      </Card>
                                    </div>
                        )}
                </div>

            </div>
        </InfiniteScroll>
            
    )
}
    
};

export default PostList;