import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import HomeView from './components/HomeView';
import PersonalInfo from './components/PersonalInfo';



const App = () => (
  <Router>
    <div className="container mx-auto p-3">
      <PersonalInfo />
    </div>
    <div className="container mx-auto px-3">
      <Switch>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </div>
    
  </Router>
)

export default App;