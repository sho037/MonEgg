import { Box } from "@mui/material";

import SignUp from "../Features/SignUp/SignUp";

const SignUpPage = () => {
  return (
    <Box borderRadius={16} sx={{ m: "auto", maxWidth: "100%", width: 500, pt: 10 }}>
      <SignUp />
    </Box>
  );
};

export default SignUpPage;
