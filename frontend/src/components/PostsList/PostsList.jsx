import { useLoaderData } from 'react-router-dom';
import classes from './PostsList.module.css';
import Post from '../Post/Post';

const PostsList = () => {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => {
                        // console.log('Rendering post with id:', post.id);
                        return (
                            <Post
                                key={post.id}
                                id={post.id}
                                author={post.author}
                                body={post.body}
                            />
                        );
                    })}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
};

export default PostsList;
