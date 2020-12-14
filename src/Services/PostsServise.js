import API from '../API';

class PostsServise {
    static async fetchPosts() {
        try {
            const posts = await API.get('posts');

            return posts.data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default PostsServise;
