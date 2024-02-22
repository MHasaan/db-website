import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '80px',
    left: '527px',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    top:"-10px",
    height: '30px', // decreased height
    width: '90px', // increased width
    padding: '0',
    backgroundColor: '#336699', // darker blue
    '&:hover': {
      backgroundColor: '#26547c', // even darker when hovered
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
      <Button 
        variant="contained" 
        type="submit" 
        className={classes.button}
        sx={{
          borderRadius: '20px', // This will override the MUI styling
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
