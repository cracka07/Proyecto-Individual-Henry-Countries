import './App.css';
import {Route} from "react-router-dom"
import Home from "./components/home/Home"
import LandingPage from './components/landingPage/LandingPage';
import Detail from './components/detail/Detail';
import Form from './components/create/Form';



function App() {
  return (
    <div className="App">

      <Route exact path="/">
         <LandingPage/>
      </Route>
      <Route exact path="/home">
          <Home/>
      </Route>
      <Route exact path="/detail/:id">
        <Detail/>
      </Route>
      <Route exact path="/createActivities">
        <Form/>
      </Route>
     
    </div>
  );
}

export default App;
