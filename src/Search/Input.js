import React from 'react';
import { TextField, Box, Button } from '@mui/material';

const Form = () => {
  const containerStyles = {
    position: 'absolute',
    top: '80px',
    left: '590px',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputStyles = {
    height: '35px',
    color: '#edeffd',
    backgroundColor: '#2b2d33', // Dark background color
    border: 'none', // Remove default border
    borderRadius: '4px', // Add a subtle border radius
    padding: '8px', // Adjust padding for better alignment
    width: '200px',
    marginRight: '10px',
  };

  const buttonStyles = {
    height: '35px',
    color: '#edeffd',
    backgroundColor: '#2b2d33', // Dark background color
    border: 'none', // Remove default border
    borderRadius: '4px', // Add a subtle border radius
    padding: '8px', // Adjust padding for better alignment
    width: '200px',
    marginRight: '10px',
  };

  return (
    <Box style={containerStyles}>
      <TextField
        placeholder="Enter to Search"
        variant="outlined"
        InputLabelProps={{
          style: {
            top: '-10px',
            color: '#edeffd', // Label text color
          },
        }}
        InputProps={{
          style: inputStyles,
        }}
      />
      <Button
        color="primary"
        variant="contained"
        size="large"
        style={buttonStyles}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
