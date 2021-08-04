import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch } from 'react-router-dom';
import AnimatedSwitch from './session_form/animated_switch';

const App = () => (
    <div className='page'>
        <header>
            <h1>Discord</h1>
            <GreetingContainer />
        </header>
        <AnimatedSwitch />
    </div>
);

export default App