import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from '@carbon/react';
import TutorialHeader from './Components/TutorialHeader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './content/LandigPageComponent';
import RepoPage from './content/RepoPage';
import { Theme } from '@carbon/react';
class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <BrowserRouter>
          <Theme theme="g100">
            <TutorialHeader />
          </Theme>
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/repos" component={RepoPage} />
            </Switch>
          </Content>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
