import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SignIn = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    return (
        <>
            <Box bgcolor={"#e8eaf6"}
                padding={2}>
                <Typography variant="h5">Sign In</Typography>
                <hr />
                <Typography variant="body1">サインイン</Typography>
                <br />
                <Box>
                    <TextField id="email" fullWidth label="メールアドレス" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <TextField id="password" fullWidth type="password" label="パスワード" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </Box>
                <br />
                <Box>
                    <Button type="submit" variant="contained" color="primary">
                        Sign In
                    </Button>
                </Box>
            </Box >
        </>
    );
};

export default SignIn;