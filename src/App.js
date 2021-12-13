import React from 'react'
import './styles/output.css';
import Layout from './pages/studentModule/Layout.jsx'
import Login from './pages/loginRegister/Login';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Register from './pages/loginRegister/Register'
import Home from './pages/layout/Home.jsx';
import Dashboard from './pages/studentModule/Dashboard';
import MakeComplaint from './pages/studentModule/MakeComplaint';
import Feedback from './pages/studentModule/Feedback';
import AccountSetting from './pages/studentModule/AccountSetting';
import TransferHistory from './pages/studentModule/TransferHistory';
import HowItWork from './pages/layout/HowItWork'
import Payment from './pages/layout/Payment.jsx';
import Success from './pages/layout/Success.jsx';
function App() {
  return (
    <div>
    
    {/* <Layout /> */}
    <Router>
    <Switch>
        <Route path='/Login'  component={Login}/>
        <Route path='/Register' component={Register}/>
        <Route path='/HowItWork' component={HowItWork}/>
               
        <Route path='/Dashboard' component={Dashboard}/>
        <Route path='/makeComplaint' component={MakeComplaint}/>
        <Route path='/TransferHistory' component={TransferHistory}/>
        <Route path='/feedback' component={Feedback}/>
        <Route path='/accountSetting' component={AccountSetting}/>
        <Route path='/HowItWork' component={HowItWork}/>
        
        <Route path='/Layout' component={Layout}/>
         <Route path='/Payment' component={Payment}/>
         <Route path='/Success' component={Success}/>
        <Route path='/' component={Home}/>  
      </Switch>
    </Router>
      
    </div> 
  );
}

export default App;
