import React from 'react';
import TextField from '@mui/material/TextField';

const NameEtc = ({ label, placeholder, top, left }) => {
  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    top: `${top}px`,
    left: `${left}px`,
  };

  const labelStyles = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#edeffd',
    marginRight: '10px',
    position: 'relative',
    top: '-4px',
  };

  const inputStyles = {
    height: '35px',
    color: '#edeffd',
    backgroundColor: '#2b2d33', // Dark background color
    border: 'none', // Remove default border
    borderRadius: '4px', // Add a subtle border radius
    padding: '8px', // Adjust padding for better alignment
    width: '200px',
  };

  return (
    <div style={containerStyles}>
      <div style={labelStyles}>{label}:</div>
      <TextField
        placeholder={placeholder}
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
    </div>
  );
};

export default NameEtc;
