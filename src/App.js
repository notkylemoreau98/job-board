import './components/styles/App.css';
import ScrollToTop from './components/scrollToTop';
import Header from './components/Header';
import JobData from './components/data/data.json';
import JobsList from './components/JobsList';
import Listing from './components/Listing';
import Listings from './components/Listing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/* 
  Use state for the filters and have it match objects that match the state
    For example: Location matchers for United States
  - Need a search component
  - Worry more about getting proper data passed at the end and work on filtering
  - Create a mixin for buttons
*/

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="app">
        <Switch>
          <Route path="/listing/:listingName">
            <Header />
            <Listing />
          </Route>

          <Route path="/">
            <Header />
            <JobsList />
            <Listings />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
