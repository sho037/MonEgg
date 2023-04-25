import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SignUp = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    return (
        <>
            <Box bgcolor={"skyblue"}
                padding={2}>
                <Typography variant="h5">Sign Up</Typography>
                <hr />
                <Typography variant="body1">ユーザー登録</Typography>
                <Box>
                    <Typography variant="caption">ユーザーネームは表示される名前になります。</Typography>
                    <br />
                    <TextField id="name" fullWidth label="ユーザーネーム" variant="outlined" value={name} onChange={(e) => { setName(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Typography variant="caption">メールアドレスはログイン時に利用します。</Typography>
                    <br />
                    <TextField id="email" fullWidth label="メールアドレス" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Typography variant="caption">パスワードは8文字以上で入力してください。</Typography>
                    <br />
                    <TextField id="password" fullWidth type="password" label="パスワード" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Typography variant="caption">同じパスワードを入力してください。</Typography>
                    <br />
                    <TextField id="confirmPassword" fullWidth type="password" label="パスワード確認" variant="outlined" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Button type="submit" variant="contained" color="primary">
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default SignUp;