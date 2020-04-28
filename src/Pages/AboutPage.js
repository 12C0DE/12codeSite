import React from 'react';
import Center from '../Component/Center/Center';
import classes from '../scss/main.scss';
import EdgeButton from '../Component/EdgeButton';
import TBbutton from '../Component/TBbutton'

const aboutPage = (props) => {
    return (
        <div className='aboutBG'>
            <table className={classes.fillArea}>
                <tbody>
                    <TBbutton Name='Home' path='/' />
                    <tr>
                        <EdgeButton
                            Name='Contact Me'
                            path='/contact' 
                        />
                        <td className={classes.TitleContainer}>
                            <h2>about</h2>
                        </td>
                    </tr>
                    <TBbutton Name='Projects' path='/projects' />
                </tbody>
            </table>
        </div>
    )
}

export default aboutPage;