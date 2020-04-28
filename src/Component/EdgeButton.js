import React from 'react';
import '../scss/pageElements.scss';
import { Link } from 'react-router-dom';

const edgeButton = (props) => {
    return (
        <td className='Upright'>
            <div>
                <Link to={props.path}>{props.Name}</Link>
            </div>
        </td>
    )
}

export default edgeButton;