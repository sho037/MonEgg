import React from 'react';
import {
    useTheme,
    useMediaQuery,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import PostForm from './PostForm';
import PostAddIcon from '@mui/icons-material/PostAdd';

const Post = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const mediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    const getDialogWidth = React.useCallback(() => {
        if (fullScreen && !mediumScreen && !largeScreen) { return '100%'; }
        if (mediumScreen && !fullScreen && !largeScreen) { return '65%'; }
        if (largeScreen && !fullScreen && !mediumScreen) { return '50%'; };
        return '100%';
    }, [fullScreen, largeScreen, mediumScreen]);

    const [openPostDialog, setOpenPostDialog] = React.useState(false);

    return (
        <>
            <Button variant="contained" color="primary" onClick={() => setOpenPostDialog(true)}><PostAddIcon /></Button>
            <Dialog
                open={openPostDialog}
                onClose={() => setOpenPostDialog(false)}
                aria-labelledby="form-dialog-title"
                fullScreen={fullScreen}
                fullWidth
                maxWidth="xl"
                sx={{
                    width: getDialogWidth(),
                    maxWidth: '100%',
                }}
            >
                <DialogTitle id="form-dialog-title">投稿してみよう！</DialogTitle>
                <DialogContent sx={{ width: '85%' }}>
                    <br />
                    <PostForm />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenPostDialog(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Post;