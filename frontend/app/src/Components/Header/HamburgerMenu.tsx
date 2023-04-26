import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar, IconButton, Drawer } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';

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
                    <Box sx={{ width: '500', bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Drafts" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                        <Divider />
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Trash" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Spam" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </Drawer>
            </Toolbar>
        </>
    );
};
