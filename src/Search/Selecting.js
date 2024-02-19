import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Selecting =()=> {
    return (
       <Select
        sx={{
       marginTop:35,        
          width: 250,
          height: 50,
        }}
      >
        <MenuItem value={1}>Red</MenuItem>
        <MenuItem value={2}>Black</MenuItem>
        <MenuItem value={3}>Blue</MenuItem>
        <MenuItem value={4}>Green</MenuItem>
        <MenuItem value={5}>Yellow</MenuItem>
      </Select>
)
}

export default Selecting;
