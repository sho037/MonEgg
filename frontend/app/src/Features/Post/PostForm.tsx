import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import Location from "../Location/Location";
import PostToBackend from "./PostToBackend";

const PostForm = () => {
    const [postText, setPostText] = React.useState("");

    if (localStorage.getItem("userLocationCode") === "") {
        return (
            <>
                <Typography variant="h6" color="error">Locationを選択してください。</Typography>
                <br />
                <Location />
            </>
        );
    } else {
        return (
            <>
                <TextField
                    id="postText"
                    label="投稿内容"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={20}
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
                <br />
                <br />
                <Button variant="contained" color="primary" type="submit" onClick={() => { if (postText !== "") { PostToBackend(postText) } }}>投稿</Button>
            </>
        );
    }
};

export default PostForm;