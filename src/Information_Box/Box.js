import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MyButton from './My_Button';
import Name_etc from './info';

const BoxComponent = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleCreate = () => {
        console.log('Create button clicked');
    };

    const handleEdit = () => {
        console.log('Edit button clicked');
    };

    const handleDelete = () => {
        console.log('Delete button clicked');
    };

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
            <Name_etc label="Last Name" placeholder="Enter your last name" top={-40} left={400} />
            <Name_etc label="Weight" placeholder="Enter Weight" top={-90} left={850} />
            <Name_etc label="Phone No" placeholder="Enter your Phone No." top={-70} left={2} />
            <Name_etc label="Address" placeholder="Enter your Address" top={-120} left={400} />
            <Name_etc label="Remaining Stock" placeholder="Stock Values" top={-170} left={850} />
            <Name_etc label="Company Name" placeholder="Company Name" top={-140} left={2} />
            <Name_etc label="Product No" placeholder="Enter Product Number" top={-190} left={400} />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Item Marked for Reording"
                sx={{
                    position: 'absolute',
                    top: 325, // Adjust this value to move the checkbox up or down
                    left: 880, // Adjust this value to move the checkbox left or right
                }}
            />
            <MyButton label="Create" onClick={handleCreate} top='380px' left='200px' />
            <MyButton label="Edit" onClick={handleEdit} top='380px' left='590px' />
            <MyButton label="Delete" onClick={handleDelete} top='380px' left='950px' />
        </Box>
    );
};

export default BoxComponent;
