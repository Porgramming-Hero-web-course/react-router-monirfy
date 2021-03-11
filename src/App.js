import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Teams from './components/Teams/Teams';
import TeamsDetails from './components/TeamsDetails/TeamsDetails';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Banner />
            <Teams />
            <Footer />
          </Route>

          <Route path='/about'>
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path='/details/:idTeam'>
            <Header />
            <TeamsDetails />
            <Footer />
          </Route>

          <Route path='*'>
            <Header />
            <NoMatch />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
