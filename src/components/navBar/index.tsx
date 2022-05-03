import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import {styled} from '@mui/material/styles';
import {Portrait, Menu} from '@mui/icons-material';

function NavBar(props:any) {
    
    return (
        <AppBar sx={{
            backgroundColor: 'white',
            position: 'sticky'
        }}>
            <Toolbar>
                <IconButton children={<Menu/>}/>
                <IconButton sx={{
                    ml: 'auto',
                    borderRadius: 0
                }} children={<Portrait />} />
            </Toolbar>
        </AppBar> 
    )
}

export default NavBar;