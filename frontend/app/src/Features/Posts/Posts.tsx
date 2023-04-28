import React from "react";
import { getPost } from "./api/getPost";
import { UserEntity } from "../../types";
import { formatDate } from "../../utils/format";

import { Typography, Button, Grid } from "@mui/material";

import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
      } else if (
        Array.isArray(element.descendants) &&
        element.descendants.length > 0
      ) {
        cnt++;
        return count(element.descendants);
      } else {
        cnt++;
        return cnt;
      }
    });
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
  const spotId = Number(localStorage.getItem("userLocationCode"));

  const [posts, setPosts] = React.useState<PostsEntity>([]);
  const [postsToggleOpen, setPostsToggleOpen] = React.useState<boolean[]>([]);
  React.useEffect(() => {
    getPost(spotId, setPosts);
  }, []);
  React.useEffect(() => {
    setPostsToggleOpen(new Array<boolean>(countPosts(posts)).fill(false));
  }, [countPosts(posts)]);

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
            <Grid container>
              <Grid item sx={{ ml: 3, mt:"auto" }}>
                <AccountCircleIcon />
              </Grid>
              <Grid item sx={{ ml: 3 }}>
                <Typography variant="h5">{element.user.name}</Typography>
              </Grid>
              <Grid item sx={{ ml: 3, mt: "auto" }}>
                <Typography variant="caption">
                  {formatDate(element.created_at)}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" sx={{ ml: 3 }}>{element.content}</Typography>
            <br />
            {!postsToggleOpen[element.id] && (
              <Button onClick={() => handlePostsToggleOpen(element.id)}>
                <ForumIcon />
              </Button>
            )}
            {postsToggleOpen[element.id] && (
              <Button onClick={() => handlePostsToggleOpen(element.id)}>
                返信を閉じる
              </Button>
            )}
            <hr />
            {callProcessPosts(element.descendant, element.id)}
          </div>
        );
      } else if (
        Array.isArray(element.descendants) &&
        element.descendants.length > 0
      ) {
        return (
          <div key={element.id}>

            <Grid container>
                <Grid item sx={{ ml: 3, mt:"auto" }}>
                    <AccountCircleIcon />
                </Grid>
                <Grid item sx={{ ml: 3 }}>
                    <Typography variant="h5">{element.user.name}</Typography>
                </Grid>
                <Grid item sx={{ ml: 3, mt: "auto" }}>
                    <Typography variant="caption">
                    {formatDate(element.created_at)}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" sx={{ ml: 3 }}>{element.content}</Typography>
            <br />
            {!postsToggleOpen[element.id] && (
              <Button onClick={() => handlePostsToggleOpen(element.id)}>
                <ForumIcon />
              </Button>
            )}
            {postsToggleOpen[element.id] && (
              <Button onClick={() => handlePostsToggleOpen(element.id)}>
                返信を閉じる
              </Button>
            )}
            <hr />
            {callProcessPosts(element.descendants, element.id)}
          </div>
        );
      } else {
        return (
          <div key={element.id}>
            <Grid container>
                <Grid item sx={{ ml: 3, mt:"auto" }}>
                    <AccountCircleIcon />
                </Grid>
                <Grid item sx={{ ml: 3 }}>
                    <Typography variant="h5">{element.user.name}</Typography>
                </Grid>
                <Grid item sx={{ ml: 3, mt: "auto" }}>
                    <Typography variant="caption">
                    {formatDate(element.created_at)}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" sx={{ ml: 3 }}>{element.content}</Typography>
            <hr />
          </div>
        );
      }
    });
  };

  return <>{processPosts(posts)}</>;
};
