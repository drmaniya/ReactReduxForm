import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import DataForm from './DataForm';
import List from './List';

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={DataForm} />
            <Route path={'/viewlist'} component={List} />
        </Switch>
    )
}

export default Routes;