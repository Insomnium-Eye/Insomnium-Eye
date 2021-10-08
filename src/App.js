import './App.css';
import IENavbar from './IENavbar';
import IEfooter from './IEfooter';
import {Route} from 'react-router-dom';

import Home from './Home';
import Games from './Games';
import Comics from './Comics';
import About from './About';
import Contact from './Contact';

const rPath = process.env.REACT_APP_FOR_PATH;

function App() {
  return (
    
      <div className="App" style={{ backgroundImage: "url(/images/bg.jpg)"}}>
          <div className="content">
              <Route exact path= "/"><IENavbar page="/"/><Home/></Route>
              <Route exact path= "/games"><IENavbar page="/games"/><Games/></Route>
              <Route exact path= "/comics"><IENavbar page="/comics"/><Comics/></Route>
              <Route exact path= "/about"><IENavbar page="/about"/><About/></Route>
              <Route exact path= "/contact"><IENavbar page="/contact"/><Contact/></Route>
            <IEfooter/>
          </div>
          
      </div>
      
  );
}

export default App;
