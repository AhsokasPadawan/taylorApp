import './App.css';
import Quote from './components/Quote';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Nav} ></Route>
      <Route exact path='/' component={Quote}></Route>
      <Route exact path='/about' component={About} ></Route> 
      <Route exact path='/contactUs' component={Contact} />
    </div>
  );
}

export default App;