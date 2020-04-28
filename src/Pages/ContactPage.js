import React from 'react';
import Center from '../Component/Center/Center';
import EdgeButton from '../Component/EdgeButton';
import TBbutton from '../Component/TBbutton';
import '../scss/main.scss';
import classes from '../scss/main.scss';

const contact = () => {
    return (
        <div className='page contactBG'>
            <table className={classes.Header}>
                <tbody>
                    <TBbutton Name='Home' path='/' />
                    <tr>
                        <td className={classes.TitleContainer}>
                            <Center />
                        </td>
                        <EdgeButton
                            Name='About'
                            path='/about'
                        />
                    </tr>
                    <TBbutton Name='Projects' path='/projects' />
                </tbody>
            </table>
        </div>
    )
}

export default contact;