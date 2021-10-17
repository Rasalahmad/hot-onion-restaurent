import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Breakfast from './components/Home/Meals/Breakfast/Breakfast';
import FoodDetails from './components/Home/Meals/FoodDetails/FoodDetails';
import Meals from './components/Home/Meals/Meals/Meals';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path = '/'>
         <Home></Home>
         </Route>
         <Route exact path = '/breakfast'>
            <Breakfast></Breakfast>
         </Route>
         <Route path = '/breakfast/:foodId'>
            <FoodDetails></FoodDetails>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
