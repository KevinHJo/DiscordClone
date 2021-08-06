import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import { AuthRoute } from '../../util/route_util';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup className='session-animation-parent'>
        <CSSTransition
            key={location.key}
            classNames='slide'
            timeout={500}
        >
            <Switch>
                <AuthRoute exact path='/login' component={LoginFormContainer}/>
                <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

export default AnimatedSwitch