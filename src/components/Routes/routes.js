import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';



const Routes = () => {
    return (
        <Suspense fallback={null}>
            <Switch>
                {/* <Route exact path="/search.html">
                    <Search />
                </Route> */}
               
            </Switch>
        </Suspense>
    );
};

export default Routes;
