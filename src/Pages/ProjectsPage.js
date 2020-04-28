import React from 'react';
import EdgeButton from '../Component/EdgeButton';
import TBbutton from '../Component/TBbutton';
import classes from '../scss/main.scss';

const projectsPage = (props) => {
    return (
        <div className='projectsBG'>
            <table className={classes.Header}>
                <tbody>
                    <TBbutton Name='Home' path='/' />
                    <tr>
                        <EdgeButton
                            Name='Contact Me'
                            path='/contact'
                        />
                        <td>
                            <h2>Projects</h2>
                        </td>
                        <EdgeButton
                            Name='About'
                            path='/about'
                        />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default projectsPage;