import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '15px',
    left: '527px',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    top:"-10px",
    borderRadius: '20px', // corrected here
    height: '30px',
    width: '90px',
    padding: '0',
    backgroundColor: '#336699', // light blue
    '&:hover': {
      backgroundColor: '#26547c', // color when hovered
    },
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Enter to Search"
        variant="outlined"
        style={{ marginRight: '10px', height: '50px', width: '200px' }}
        InputLabelProps={{ 
          style: { top: '-10px' }, 
        }}
        InputProps={{ 
          style: { height: '35px' },
        }}
      />
      <Button variant="contained" type="submit" className={classes.button}>
        Submit
      </Button>
    </Box>
  );
};

export default Form;
