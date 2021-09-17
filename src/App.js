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
          
          <IENavbar/>
          <div className="content">
              <Route exact path= "/" component={Home} IENavbar={"/"}/>
              <Route exact path= "/games" component={Games} IENavbar={"/games"}/>
              <Route exact path= "/comics" component={Comics} IENavbar={"/comics"}/>
              <Route exact path= "/about" component={About} IENavbar={"/about"}/>
              <Route exact path= "/contact" component={Contact} IENavbar={"/contact"}/>
            <IEfooter/>
          </div>
          
      </div>
      
  );
}

export default App;
