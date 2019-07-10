import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import { GlobalStyled } from './style.js';
import { Font } from './statics/iconfont/iconfont'
import store from './store'
import detail from './pages/detail'
import home from './pages/home'
import login from './pages/login'
import posting from './pages/posting'
import signup from './pages/signup'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() { 
        return (
            <div>
                <Font/>
                <GlobalStyled />
                <Provider store={store}>
                    <BrowserRouter>
                        <Header />
                        <Route path='/' exact component={home}></Route>
                        <Route path='/detail/:id' component={detail}></Route>
                        <Route path='/login' component={login}></Route>
                        <Route path='/posting' component={posting}></Route>
                        <Route path='/signup' component={signup}></Route>

                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
