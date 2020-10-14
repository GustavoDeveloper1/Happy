
import React from 'react'
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import LandingPage from './pages/landing';
import OrfanateMap from './pages/orfanatesmap';

function Routes(){
    return(
        <div>
                <BrowserRouter>
                        <Switch>
                                <Route path="/" exact component={LandingPage}/>
                                <Route path="/app" component={OrfanateMap}/>
                        </Switch>
                </BrowserRouter>
        </div>  
    );
}

export default Routes;