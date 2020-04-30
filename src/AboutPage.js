import React from 'react';
import Center from './Component/Center/Center';
import classes from './MainPage/MainPage.module.css';
import EdgeButton from './Component/EdgeButton';
import TBbutton from './Component/TBbutton'
import './pageTransitions/slideTransitions.scss';

const aboutPage = (props) => {
    return (
        <div className='page'>
            <table className={classes.Header}>
                <tbody>
                    <TBbutton Name='Up' href='/' />
                    <tr>
                        <EdgeButton
                            Name='Left'
                            path='/'
                            Right={false} 
                        />
                        <td className={classes.TitleContainer}>
                            <h2>about</h2>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default aboutPage;