import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
