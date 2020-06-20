import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import homepage from './components/homepage/homepage';
import user from './components/user/Login';
import cart from './components/cart';
import Registration from './components/user/Registration';
// import Register from './components/user/Register'

    import OrderPlaced from './components/OrderPlaced';
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/BookStoreApplication" component={homepage} exact={true} />
            <Route path="/Login" component={user} eaxcat={true}/>
            <Route path="/cart" component={cart} eaxcat={true}/>
            <Route path="/Registration" component={Registration} eaxcat={true}/>
            <Route path='/OrderPlaced' component={OrderPlaced} />
            {/* <Route path="/Register" component={Register} eaxcat={true}/> */}



        </div>
    </BrowserRouter>
);
export default AppRouter;