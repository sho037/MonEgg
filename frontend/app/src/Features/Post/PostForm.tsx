import React from "react";
import { Typography, TextField } from "@mui/material";
import Location from "../Location/Location";

const PostForm = () => {
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
                />
            </>
        );
    }
};

export default PostForm;