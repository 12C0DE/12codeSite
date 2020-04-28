import React from 'react';
import Button from 'react-bootstrap/Button';

const btn = (props) => {
    return (
        <Button 
            block
            variant='outline-secondary'>{props.Name}</Button>
    )
}

export default btn;