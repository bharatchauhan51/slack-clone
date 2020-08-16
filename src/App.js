import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Chat from './Chat'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="App">
      {/* Header Section */}
      <Router>
        {
          !user ? (
            <Login/>
          ) : (
             <> 
            <Header></Header>
            <div className="app__body">
              <Sidebar></Sidebar>
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat/>
                  </Route>
                  <Route path='/'>
                    <h1>Welcome to Slack by Bharat</h1>
                  </Route>
              </Switch>
                </div>
                </>
          )
        }
      </Router>
    </div>
  );
}

export default App;
