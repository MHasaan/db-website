import React from 'react';
import Box from '@mui/material/Box';
import Name_etc from './info';

const BoxComponent = () => {
    return (
        <Box 
            sx={{
                border: 1,
                borderColor: '#000000',
                borderRadius: 2,
                p: 2,
                m: 2,
                width: '95%',
                height: '300px',
                marginTop: '60px', // This will move the box down
            }}
        >
            <Name_etc label="First Name" placeholder="Enter your first name" top={10} left={2} />
            <Name_etc label="Last Name" placeholder="Enter your last name" top={20} left={2} />
            <Name_etc label="Phone No" placeholder="Enter your Phone No." top={30} left={2} />
            <Name_etc label="Address" placeholder="Enter your Address" top={40} left={2} />
        </Box>
    );
};

export default BoxComponent;
