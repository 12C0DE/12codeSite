import React from 'react';
import '../../scss/pageStyle.scss';
import click from '../../imgs/click.svg';


const center = (props) => {

    return (
        <div style={{color: 'white', textAlign: 'center'}}>
            <h2 className='bodyTextX'>Hi, I'm</h2>
            <h1 className='Title'>
                <b>12</b>uben<b>H</b>
            </h1>
            <h2 className='bodyTextX'>and this website is for YOU to learn about ME</h2>
            <p className='bodyText'>I've been creating content like this for {props.yearsDev} years</p>
            {/* <p className='bodyText'>I'm currently a Software Engineer III for Abbott</p> */}
            <p className='bodyText'>And I would love to create something for you</p>
            {/* <h6 className='bodyText'>CLICK</h6> */}
            <img id='clickImg' src={click} alt='CLICK'></img>
            <p className='bodyText'>to see more</p>
        </div>
    )
}

export default center;