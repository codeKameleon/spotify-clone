import  {useState } from 'react';

import { Button, Modal, Box, TextField } from '@mui/material'
import './AddNewPlaylist.scss';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '3px solid #191414',
    boxShadow: 24,
    p: 4,
}

const createPlaylistBtnStyle = {
    "&.MuiButton-outlined": {
        color: '#191414',
        border: '2px solid rgba(30, 215, 96, .9)'
    }
}

const textFieldStyle = {
    margin: '.5rem 0'
}

const buttonStyle = {
    margin: '0 .3rem',

    "&.MuiButton-contained": {
        color: '#fff',
        backgroundColor: 'rgba(30, 215, 96, .9)'
    },

    "&.MuiButton-outlined": {
        color: '#191414',
        border: '2px solid rgba(30, 215, 96, .9)'
    }
}

const AddNewPlaylist  = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <>
            <Button 
                sx={createPlaylistBtnStyle} 
                variant="outlined" 
                onClick={handleOpen}>
                    Add new playlist
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalStyle}>
                    <h2>Add a new playlist</h2>
                    
                    <form className="form">
                        <TextField sx={textFieldStyle} label="Playlist name" variant="outlined" />
                        <TextField sx={textFieldStyle}  label="Playlist description (optional)" variant="outlined" multiline />

                        <div className="actions">
                            <Button sx={buttonStyle} variant="outlined" onClick={handleClose}>Cancel</Button>
                            <Button sx={buttonStyle} variant="contained">Create</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )

}

export default AddNewPlaylist;