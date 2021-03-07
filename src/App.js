import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';



function App() {
  return (
    <div className="App">
      <Router >
       
         <Route exact path="/" component={Home}/>
         <Route exact path="/About" component={About}/>
         <Route exact path="/Contact" component={Contact}/>
       
    </Router>
    </div>
  );
}

export default App;
