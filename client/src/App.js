import './App.scss';
import {Link, Switch, Route } from 'react-router-dom';
import TheNavigation from "./components/TheNavigation/TheNavigation";
import AnalystsDashboard from "./components/pages/AnalystsDashboard/AnalystsDashboard";
import AnalystProfile from "./components/pages/AnalystProfile/AnalystProfile";


function App() {
  return (
    <div className="App">
        <TheNavigation/>

        <div className="App-content">
            <Switch>
                <Route exact path='/analysts' component={AnalystsDashboard}/>
                <Route exact path='/analysts/:analystId' component={AnalystProfile}/>
            </Switch>
        </div>

    </div>
  );
}

export default App;
