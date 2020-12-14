import React, { useState, useEffect } from 'react';
import PostsServise from '../../Services/PostsServise';
import Post from '../../Components/Post';

const Posts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        PostsServise.fetchPosts()
            .then((posts) => {
                setData(posts);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            { data.map((post) => <Post title={post.title} body={post.body} />) }
            ;
        </div>
    );
};

export default Posts;
