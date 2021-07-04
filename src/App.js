import './components/styles/App.css';
import JobCard from './components/JobCard';
import JobsList from './components/JobsList';

/* 
  Use state for the filters and have it match objects that match the state
    For example: Location matchers for United States
*/

function App() {
  return (
    <div className="app">
     <JobCard />
     <JobsList />
    </div>
  );
}

export default App;
