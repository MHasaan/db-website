import React from 'react';
import Box from '@mui/material/Box';
import Name_etc from './info';

const BoxComponent = () => {
    return (
        <Box 
            sx={{
                border: 1,
                borderColor: '#00008B',
                borderRadius: 2,
                p: 2,
                m: 2,
                width: '95%',
                height: '300px',
                marginTop: '60px', // This will move the box down
            }}
        >
            <Name_etc label="First Name" placeholder="Enter your first name" top={100} left={2} />
            <Name_etc label="Last Name" placeholder="Enter your last name" top={150} left={2} />
            {/* Add more Name_etc components as needed */}
        </Box>
    );
};

export default BoxComponent;
