import * as React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar, IconButton, Drawer } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PlaceIcon from '@mui/icons-material/Place';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
} from 'react-router-dom';


interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
}

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
    itemProps,
    ref,
) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to } = props;

    return (
        <li>
            <ListItemButton component={Link} to={to}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItemButton>
        </li>
    );
}

export const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    size="large"
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon fontSize="medium" />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                    PaperProps={{ style: { width: 250 } }}
                >
                        <Box sx={{ width: 360 }}>
                            <Paper elevation={0}>
                                <List aria-label="main mailbox folders">
                                    <ListItemLink to="../../" primary="ホーム" icon = {<HomeIcon />} />
                                    <ListItemLink to="../../SignIn" primary="サインイン" icon={<LoginIcon />} />
                                    <ListItemLink to="../../Location" primary="地点を設定" icon={<PlaceIcon />} />
                                </List>
                                <Divider />
                            </Paper>
                        </Box>
                </Drawer>
            </Toolbar>
        </>
    );
};
