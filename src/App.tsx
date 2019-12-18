import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {Loader} from './components/common/loader';
import {Footer} from './components/common/footer';
import './components/common/main-style.css';


const WelcomePage = lazy(() => import('./components/pages/welcome'));
//const PersonalInfoPage = lazy(() => import('./components/pages/personal-info'));
//const MusicPreferencePage = lazy(() => import('./components/pages/music-preference'));
//const ReviewPage = lazy(() => import('./components/pages/review'));


export const App: React.FC = () => {
  return (
    <Router>
      {/* using Suspense but is experimental */}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          {/*<Route path="/ask/personal-info" component={PersonalInfoPage}/>
          <Route path="/ask/music-preference/:id" component={MusicPreferencePage}/>
  <Route path="/review/:id" component={ReviewPage}/>*/}
          <Route path="*">
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          </Route>
        </Switch>
        <Footer />
      </Suspense> 
    </Router>
  );
}