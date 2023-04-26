import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Registration from "./Registration";

const SignUp = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    return (
        <>
            <Box bgcolor={"#e8eaf6"}
                padding={2}>
                <Typography variant="h5">Sign Up</Typography>
                <hr />
                <Typography variant="body1">ユーザー登録</Typography>
                <Box>
                    <Typography variant="caption">ユーザーネームは表示される名前になります。</Typography>
                    <TextField id="name" sx={{ mt: 1 }} fullWidth label="ユーザーネーム" variant="outlined" value={name} onChange={(e) => { setName(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Typography variant="caption">メールアドレスはログイン時に利用します。</Typography>
                    <TextField id="email" sx={{ mt: 1 }} fullWidth label="メールアドレス" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Typography variant="caption">パスワードは8文字以上で入力してください。</Typography>
                    <TextField id="password" sx={{ mt: 1 }} fullWidth type="password" label="パスワード" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Typography variant="caption">同じパスワードを入力してください。</Typography>
                    <TextField id="confirmPassword" sx={{ mt: 1 }} fullWidth type="password" label="パスワード確認" variant="outlined" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Button type="submit" variant="contained" color="primary" onClick={() => {
                        if (name && email && password && confirmPassword) {
                            Registration(name, email, password, confirmPassword);
                        }
                    }}>
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default SignUp;