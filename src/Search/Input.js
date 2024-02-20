import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '15px',
    left: '517px',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    top:"-10px",
    borderRadius: '50%',
    height: '40px',
    width: '70px',
    padding: '0',
    backgroundColor: '#d7e6f7', // light blue
    '&:hover': {
      backgroundColor: '#d7e8f7', // color when hovered
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
        style={{ marginRight: '10px', height: '55px', width: '200px' }} // reduced height and width
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
