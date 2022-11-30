import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import PostController from '@/resources/post/post.controllers';
import UserController from '@/resources/user/user.controllers'

validateEnv();

const app = new App([new PostController(), new UserController()], Number(process.env.PORT));

app.listen();