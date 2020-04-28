import React, { Component } from 'react';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import MainPage from './Pages/MainPage';
import NotFoundPage from './Pages/NotFoundPage';
import ProjectsPage from './Pages/ProjectsPage';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './scss/pageStyle.scss'; //STYLES SET HERE

// const pages = [
//   { path: '/' , name: 'home', dir: 'up' },
//   { path: '/about' , name: 'about', dir: 'right' },
//   { path: '/contact' , name: 'contact', dir: 'left' },
//   { path: '/projects' , name: 'projects', dir: 'down' }
// ];

 //     this website has the potential solution to fixing the transitions to pages:
 //     https://codesandbox.io/s/github/darbley/react-page-slide-transitions 

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  slideDirection(pathName) {
    let dir = null;
    
    switch(pathName) {
      case '/about':
        dir = 'pageSliderRight';
        break;
      case '/contact':
        dir = 'pageSliderLeft';
        break;
      case '/projects':
        dir = 'pageSliderBtm';
        break;
      default: 
        dir = 'pageSliderTop';
        break;
    }

    return dir;
  }

  getYearsDev() {
    let yearsDev = Math.ceil(new Date().getFullYear() - new Date(2013, 1, 1).getFullYear());

    return yearsDev;
  }
        
    render() {
      const { location } = this.props;
      const timeout = { enter: 2000, exit: 1000 };
      let slideDir = this.slideDirection(location.pathname);
      let yearsDev = this.getYearsDev();

    return (
      <div>
        <Route render={({location}) => (
          <TransitionGroup component='div' className=''>
          <CSSTransition
            key={location.key}
            timeout={timeout}
            classNames={slideDir}
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <div className='pg'>
              <Switch location={location}>
                {/* <Route path='/' exact component={MainPage} /> */}
                <Route path='/about' exact component={AboutPage} />
                <Route path='/contact' exact component={ContactPage} />
                <Route path='/projects' exact component={ProjectsPage} />
                <Route path='/404' component={NotFoundPage}/>
                <Route path='/' 
                  render={
                    (props) => <MainPage yearsDev={yearsDev}/>
                  } 
                  />
                <Redirect to='/404' />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )} />
      </div>
    );
  }
}

export default withRouter(App);