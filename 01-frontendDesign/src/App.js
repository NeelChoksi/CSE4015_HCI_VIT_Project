import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import ActionsGrid from './pages/ActionsGrid';
import DataAnalytics from './pages/DataAnalytics';
import EmployeeCovidData from './pages/EmployeeCovidData';
import EmployeeSiteVisitData from './pages/EmployeeSiteVisitData';
import Login from './pages/Login';
import PreferredUI from './pages/PreferredUI';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Route path="/actionsGrid" component={ActionsGrid} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Register} exact />
      <Route path="/preferredUI" component={PreferredUI} />
      <Route path="/DataAnalytics" component={DataAnalytics} />
      <Route path="/EmployeeCovidData" component={EmployeeCovidData} />
      <Route path="/EmployeeSiteVisitData" component={EmployeeSiteVisitData} />
      
    </BrowserRouter> 
    
  );
}

export default App;
