import Location from "./Features/Location/Location";
import { Posts } from "./Features/Posts/Posts";

import { Box } from "@mui/material";

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
      <Box sx={{p:3}}>
        <Posts />
      </Box>
    </>
  );
}

export default App;
