import React from 'react';
import Center from '../Component/Center/Center';
import EdgeButton from '../Component/EdgeButton';
import TBbutton from '../Component/TBbutton';
import '../scss/main.scss';

//BOOTSTRAP
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const mainPage = (props) => {
    return (
        <div className='homeBG'>
            <table className='fillArea'>
                <tbody>
                    <tr>
                        <EdgeButton 
                            Name='Contact Me'
                            path='/contact'/>
                        <td className='TitleContainer'>
                            <Center yearsDev={props.yearsDev}/>
                        </td>
                        <EdgeButton
                            Name='About Me'
                            path='/about'/>
                    </tr>
                    <TBbutton Name='Projects' path='/projects' />
                </tbody>
            </table>
        </div>
    )
}

export default mainPage;