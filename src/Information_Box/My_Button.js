import React from 'react';
import { Button } from '@nextui-org/react';

const MyButton = ({ label, onClick, top, left }) => {
    return (
        <Button 
            color="default" 
            auto 
            onClick={onClick}
            style={{ position: 'absolute', top: top, left: left }}
        >
            {label}
        </Button>
    );
};

export default MyButton;
