import Post from '../../Components/Post/Post';
import TmpData from '../../tmpfiles/postdate.json'

const GetAllPost = () => {
    const allPosts = TmpData.postData.map((post) => (
        <Post
            key={post.postId}
            nameId={post.nameId}
            postId={post.postId}
            time={post.time}
            body={post.body}
        />
    ));

    return (
        <>
            <h1>Get All Post</h1>
            {allPosts}
        </>
    )
};

const GetPost = () => {
    return (
        <>
            <h1>Get Post</h1>
            <GetAllPost />
        </>
    )
};

export default GetPost;