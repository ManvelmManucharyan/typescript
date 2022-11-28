import { Schema, model } from "mongoose";
import Post from '@/resources/post/post.interface';

const PostShcema = new Schema({
    title: {
        type: String,
        required: true,
    },

    body: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default model<Post>('Post', PostShcema);