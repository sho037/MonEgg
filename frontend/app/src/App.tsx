import Location from "./Features/Location/Location";
import { Posts } from "./Features/Posts/Posts";
import Post from "./Features/Post/Post";

import { Box } from "@mui/material";

const action = { icon: <Post />, name: "投稿" };

function App() {
  return (
    <>
      <Box
        borderRadius={16}
        sx={{ m: "auto", maxWidth: "100%", width: 500, pt: 5 }}
      >
        <Location />
      </Box>
      <br />
      <hr />
      <Box sx={{ p: 3 }}>
        <Posts />
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 9999,
        }}
      >
        <Post />
      </Box>
    </>
  );
}

export default App;
