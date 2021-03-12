import './App.css';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";
import Error from './Components/Not found/Error';
import TeamDetail from './Components/TeamDetail/TeamDetail';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/Home">
          <Home></Home>
          </Route>
          <Route path="/team/:teamId">
            <TeamDetail></TeamDetail>
          </Route>
          <Route path="/*">
          <Error></Error>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
