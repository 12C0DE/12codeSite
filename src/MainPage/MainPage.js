import React from 'react';
import Center from '../Component/Center/Center';
import classes from './MainPage.module.css';
import EdgeButton from '../Component/EdgeButton';
import TBbutton from '../Component/TBbutton';
import '../pageTransitions/slideTransitions.scss';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const mainPage = () => {
    return (
        <div className='page'>
            <table className={classes.Header}>
                <tbody>
                    <TBbutton Name='Up' href='/about' />
                    <tr>
                        <EdgeButton 
                            Name='Left'
                            path='/about'
                            Right={false} />
                        <td className={classes.TitleContainer}>
                            <Center />
                        </td>
                        <EdgeButton
                            Name='Right'
                            path='/'
                            Right={true} />
                    </tr>
                    <TBbutton Name='Contact Me' />
                </tbody>
            </table>
        </div>
    )
}

export default mainPage;