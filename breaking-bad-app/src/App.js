import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import Home from './pages/Home'
import Detail from './pages/Detail'
import Quotes from './pages/Quotes'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* exact => sadece şu path olduğunda bunu göster. */}
          <Route path="/char/:char_id" component={Detail} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// BREAKING-BAD-APP > "
