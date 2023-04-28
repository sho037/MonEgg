import { Typography, Link } from "@mui/material";

const NotFound = () => {
  return (
    <div>
      <Typography variant="h1">404 Not Found</Typography>
      <Typography variant="h2">
        <Link href="/">トップページへ</Link>
      </Typography>
    </div>
  );
};

export default NotFound;