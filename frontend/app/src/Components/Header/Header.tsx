import Box from '@mui/material/Box';
import { HamburgerMenu } from "./HamburgerMenu";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



/**
 * ヘッダを表示する
 *
 * @return {JSX.Element}
 */
export const Header = () => {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <HamburgerMenu />

                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            ログポート
                        </Typography>
                        <Button color="inherit">SignIn</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};
