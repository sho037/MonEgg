import React from 'react';
import { Typography } from '@mui/material';

type PostProps = {
    nameId: number;
    postId: number;
    time: string;
    body: string;
};

const Post = (post: PostProps) => {
    return (
        <>
            <Typography variant="h6">{post.time}</Typography>
            <Typography variant="h5">{post.body}</Typography>
        </>
    );
};

export default Post;