import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './routesNames';
import HomePageContainer from '../pages/HomePage/containers/HomePageContainer';
import CounterPageContainer from '../pages/CounterPage/containers/CounterPageContainer';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
        <Route exact path={ROUTES.COUNTER_PAGE} component={CounterPageContainer} />
      </Switch>
    </div>
  )
}

export default Routes;