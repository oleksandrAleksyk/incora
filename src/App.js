// importing Router to have abillity use Links, Routes components
import {BrowserRouter as Router} from 'react-router-dom'; 
// importing App Routes
import Routes from './routes/routes'; 
// importing components 
import Navbar from './components/Navbar/navbar'; 

function App() {
 
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes />
      </Router>
    </div>
  );
}

export default App;
