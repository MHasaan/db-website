import React from 'react';

const SearchHeader = () => {
    const headerStyles = {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
        position: 'relative',
        top: '15px',
        left: '30px',
        /* Add other styles as needed */
    };

    return (
        <div style={headerStyles}>
            Search by:
        </div>
    );
};

export default SearchHeader;
