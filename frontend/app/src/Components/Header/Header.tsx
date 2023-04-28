import { HamburgerMenu } from "./HamburgerMenu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

/**
 * ヘッダを表示する
 *
 * @return {JSX.Element}
 */
export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <HamburgerMenu />
        <Typography variant="h4" component="div">
          Logpose
        </Typography>
        <Button color="inherit" sx={{ml:"auto"}}>SignUp</Button>
      </Toolbar>
    </AppBar>
  );
};
