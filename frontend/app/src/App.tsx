import Location from "./Features/Location/Location";
import Post from "./Features/Post/Post";

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
    </>
  );
}

export default App;
