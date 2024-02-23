import React from 'react';
import { TextField, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@nextui-org/react'; // import Next UI Button

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
        color="primary" 
        variant="solid" 
        size="large" 
        auto 
        style={{ marginTop: '-15px' }} 
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
