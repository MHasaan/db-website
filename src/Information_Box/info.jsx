import React from 'react';
import TextField from '@mui/material/TextField';

const Name_etc = ({ label, placeholder, top, left }) => {
  const containerStyles = {
    display: 'flex',
    alignItems: 'center', // Vertically align label and text field
    position: 'relative',
    top: `${top}px`,
    left: `${left}px`,
  };

  const labelStyles = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginRight: '10px', // Add space between label and text field
    position: 'relative',
    top: '-10px', // Adjust this value as needed to move Text up or down
  };

  return (
    <div style={containerStyles}>
      <div style={labelStyles}>{label}:</div>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        style={{
          marginRight: '10px', 
          height: '50px', 
          width: '200px',
        }}
        InputLabelProps={{
          style: { top: '-10px' },
        }}
        InputProps={{ 
          style: { height: '35px' },
        }}
      />
    </div>
  );
};

export default Name_etc;
