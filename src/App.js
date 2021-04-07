import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import Tasks from './components/tasks';
function App() {
  return (
    <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tasks" component={Tasks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
