import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Search from 'components/Search';
import ShowPage from 'components/ShowPage';
import './AppRouter.css';

class AppRouter extends PureComponent {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
