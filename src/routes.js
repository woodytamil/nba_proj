import  React , { Component, component } from 'react';
import  { Route, Switch } from 'react-router-dom';

import Home from './component/Home/home'
import Layout from './component/hoc/layout/layout'
class Routes extends Component{
    render()
    {
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                 </Switch>
            </Layout>
            
        )
    }
}

export default Routes;