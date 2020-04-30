import React, { Component } from 'react';
import { Route, Redirect, Switch, Router } from 'react-router-dom';
import classes from './Layout.module.css';
import '../pageTransitions/slideTransitions.scss'; // SCSS FILE

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';


//Pages
import AboutPage from '../AboutPage';
import MainPage from '../MainPage/MainPage';
import NotFoundPage from '../Component/NotFoundPage';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
         prevDepth: this.getPathDepth(this.props.location)
        };
    }

    componentWillReceiveProps() {
        this.setState({ prevDepth: this.getPathDepth(this.props.location) });
    }

    getPathDepth(location) {
        let pathArr = location.pathname.split("/");
        pathArr = pathArr.filter(n => n !== "");
        return pathArr.length;
    }

    render() {

        const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 1800, exit: 1400 };

        return (
            //<div className={classes.Screen}>
                    <TransitionGroup component='div' className='App'>
                        <CSSTransition 
                            key={currentKey}
                            timeout={timeout} 
                            classNames='pageSlider' 
                            mountOnEnter={false} 
                            unmountOnExit={true}
                        >
                            <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? 'left' : 'right'}>
                                <Switch location={location}>
                                    <Route path='/' exact component={MainPage} />
                                    <Route path='/about' exact component={AboutPage} />
                                    <Route path='/404' component={NotFoundPage}/>
                                    <Redirect to='/404' />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
          //  </div>
        )
    }
}

export default Layout;