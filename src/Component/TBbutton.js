import React from 'react';
import '../scss/pageElements.scss';
import { Link } from 'react-router-dom';


const tbButton = (props) => {
    return (
        <tr className='ButtonRow'>
            <td></td>
            <td>
                <Link to={props.path}>{props.Name}</Link>
            </td>
            <td></td>
        </tr>
    )
}

export default tbButton;