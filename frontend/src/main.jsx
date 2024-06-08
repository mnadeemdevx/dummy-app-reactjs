import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts, { loader as postsLoader } from './routes/Posts.jsx';
import './index.css';
import NewPost, { action as addPostAction } from './routes/NewPost/NewPost.jsx';
import RootLayout from './routes/RootLayout.jsx';
import PostDetails, {
    loader as postDetailsLoader,
} from './routes/PostDetails/PostDetails.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Posts />,
                loader: postsLoader,
                children: [
                    {
                        path: '/create-post',
                        element: <NewPost />,
                        action: addPostAction,
                    },
                    {
                        path: '/:id',
                        element: <PostDetails />,
                        loader: postDetailsLoader,
                    },
                ],
            },
            ,
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>,
);
