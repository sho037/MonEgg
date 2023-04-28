import React from "react";
import { getPost } from "./api/getPost";
import { UserEntity } from "../../types";
import { formatDate } from "../../utils/format";

export type PostsEntity = Array<{
    id: number;
    post_id?: number;
    spot_id: number;
    user_id: number;
    content: string;
    created_at: string;
    updated_at: string;
    user: UserEntity;
    descendant?: PostsEntity;
    descendants?: PostsEntity;
}>;

const countPosts = (posts: PostsEntity): number => {
    let cnt = 0;

    const count = (posts: PostsEntity): any => {
        posts.map((element) => {
            if (Array.isArray(element.descendant) && element.descendant.length > 0) {
                cnt++;
                return count(element.descendant);
            } else if (Array.isArray(element.descendants) && element.descendants.length > 0) {
                cnt++
                return count(element.descendants);
            } else {
                cnt++
                return cnt;
            }
        })
    };

    count(posts);
    return cnt;
};

export const Posts = () => {
    /*
        各都道府県に割り当てられたIDを指定する 
        指定されたIDの都道府県に関する投稿を取得する
        以下の「1」は開発用．
    */
    const spotId = 1;

    const [posts, setPosts] = React.useState<PostsEntity>([]);
    const [postsToggleOpen, setPostsToggleOpen] = React.useState<boolean[]>([]);
    React.useEffect(() => { getPost(spotId, setPosts); }, []);
    React.useEffect(() => { setPostsToggleOpen(new Array<boolean>(countPosts(posts)).fill(false)); }, [countPosts(posts)]);

    const callProcessPosts = (posts: PostsEntity, index: number): any => {
        if (postsToggleOpen[index]) {
            return processPosts(posts);
        }
    };

    const handlePostsToggleOpen = (index: number) => {
        const newPostsToggleOpen = [...postsToggleOpen];
        newPostsToggleOpen[index] = !newPostsToggleOpen[index];
        setPostsToggleOpen(newPostsToggleOpen);
    };

    const processPosts = (posts: PostsEntity): any => {
        return posts.map((element) => {
            if (Array.isArray(element.descendant) && element.descendant.length > 0) {
                return (
                    <div key={element.id}>
                        <p>{element.user.name}</p>
                        <p>{formatDate(element.created_at)}</p>
                        {element.content}<br />
                        {!postsToggleOpen[element.id] && <button onClick={() => handlePostsToggleOpen(element.id)}>返信を開く</button>}
                        {postsToggleOpen[element.id] && <button onClick={() => handlePostsToggleOpen(element.id)}>返信を閉じる</button>}
                        <hr />
                        {callProcessPosts(element.descendant, element.id)}
                    </div >
                );
            } else if (Array.isArray(element.descendants) && element.descendants.length > 0) {
                return (
                    <div key={element.id}>
                        <p>{element.user.name}</p>
                        <p>{formatDate(element.created_at)}</p>
                        {element.content}<br />
                        {!postsToggleOpen[element.id] && <button onClick={() => handlePostsToggleOpen(element.id)}>返信を開く</button>}
                        {postsToggleOpen[element.id] && <button onClick={() => handlePostsToggleOpen(element.id)}>返信を閉じる</button>}
                        <hr />
                        {callProcessPosts(element.descendants, element.id)}
                    </div>
                );
            } else {
                return (
                    <div key={element.id}>
                        <p>{element.user.name}</p>
                        <p>{formatDate(element.created_at)}</p>
                        {element.content} <hr />
                    </div>
                );
            }
        });
    };

    return <>{processPosts(posts)}</>
};