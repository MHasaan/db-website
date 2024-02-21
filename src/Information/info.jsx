import React from 'react';

const name_etc = ({label, placeholder}) => {
    const headerStyles = {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
        position: 'relative',
        top: '400px',
        left: '30px',
        
    };

    return (
        <div style={headerStyles}>
            {label}:
            <input type="text" placeholder={placeholder} />
        </div>
    );
};

export default name_etc;
