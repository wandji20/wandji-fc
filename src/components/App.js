/* eslint-disable */
import Nav from './Nav';
import Home from './Home'
import Players from './Players';
import Fixtures from './Fixtures';
import Trophies from './Trophies';
import About from './About';
import Admin from './Admin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route exact path='/players' component={Players} />
        <Route exact path='/fixtures' component={Fixtures} />
        <Route exact path='/trophies' component={Trophies} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
