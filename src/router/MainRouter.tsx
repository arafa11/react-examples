import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Paths from './Paths';

import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';


const MainRouter = () => {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path={Paths.home} component={HomePage} />
        {/* <Route path="*" render={() => <div>404 Not Found</div>} /> */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
      </Router>
    </div>
  )
}

export default MainRouter;