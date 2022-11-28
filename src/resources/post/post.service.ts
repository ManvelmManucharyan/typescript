import PostModel from '@/resources/post/post.model';
import Post from '@/resources/post/post.interface';

class PostService {
    private Post = PostModel;

    /**
     * Create a new post
     */

    public async create(title: string, body: string): Promise<Post> {
        try {
            const post = await this.Post.create({ title, body });
            return post
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }
}

export default PostService;