import { Box } from "@mui/material";

import SignIn from "../Features/SignIn/SignIn";

const SignInPage = () => {
  return (
    <Box
      borderRadius={16}
      sx={{ m: "auto", maxWidth: "100%", width: 500, pt: 10 }}
    >
      <SignIn />
    </Box>
  );
};

export default SignInPage;
