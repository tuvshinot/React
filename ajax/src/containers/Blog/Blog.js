import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts : [],
        selectedPostId : '',
        error:false
    };

    componentDidMount() {
        axios.get("posts")
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map((post) => {
                return {
                    ...post,
                    author : 'tuvshin'
                };
            })
            this.setState({ posts : updatedPosts })
        })
        .catch(err => {
            console.log(err);
            this.setState({ error : true })
        })
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId : id})
    };

    render () {
        let posts = <p style={{textAlign:'center'}}>Something went worng!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map((post, index) => {
                return <Post 
                    title={post.title} 
                    key={post.id} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}                
                    />
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId } />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;