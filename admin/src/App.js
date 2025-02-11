import React from 'react';

import axios from 'axios';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';

import Admindashboard from './pages/Admindashboard/Admindashboard.js';
import Driver from './pages/Driver/Driver.js';
import Assistant from './pages/Assistant/Assistant.js';
import Report from './pages/Report/Report.js';
import Order from './pages/Order/Order.js';
import DeliverySchedule from './pages/Delivery_schedule/DeliverySchedule.js';
import ManagerControl from './pages/Admin_Control/Admin_Control.js';
import TruckScheduler from './pages/TruckScheduler/TruckScheduler.js';
import TrainScheduler from './pages/TrainScheduler/TrainScheduler.js';

import Sidebar from './components/Sidebar/Sidebar.js';
import Topbar from './components/Topbar/Topbar.js';
import QuarterlySales from './pages/QuarterlySales/QuarterlySales.js';
import MostOrders from './pages/MostOrders/MostOrders.js';

import data from './data.json';
import DriverWorkedHours from './pages/DriverWorkedHours/DriverWorkedHours.js';
import AssistantWorkedHours from './pages/AssistentWorkedHours/AssistentWorkedHours.js';
import UsedHoursOfTrucks from './pages/UsedHoursOfTrucks/UsedHoursOfTrucks.js';
import ReportsOfMainCities from './pages/ReportsOfMainCities/ReportsOfMainCities.js';
import ReportsOfRoutes from './pages/ReportsOfRoutes/ReportsOfRoutes.js';
import CustomerOrderReport from './pages/CustomerOrderReport/CustomerOrderReport.js';
const path = data.backend;
axios.defaults.baseURL = path;


const App = () => {
  const location = useLocation();
  const hideSidebarAndTopbar = location.pathname === '/' || location.pathname === '/signup';

  return (
    <>
      {!hideSidebarAndTopbar && <Sidebar />}
      {!hideSidebarAndTopbar && <Topbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/admindashboard' element={<Admindashboard />} />
        <Route path='/driver' element={<Driver />} />
        <Route path='/assistant' element={<Assistant />} />
        <Route path='/order' element={<Order />} />
        <Route path='/delivery_schedule' element={<DeliverySchedule />} />
        <Route path='/delivery_schedule/truckScheduler' element={<TruckScheduler />} />
        <Route path='/delivery_schedule/trainScheduler' element={<TrainScheduler />} />
        <Route path='/report' element={<Report />} />

        <Route path='report/quarterlysales' element={<QuarterlySales/>}/>
        <Route path='report/mostorders' element={<MostOrders/>}/>
        <Route path='report/hoursofdrivers' element={<DriverWorkedHours/>}/>
        <Route path='report/hoursofassistants' element={<AssistantWorkedHours/>}/>
        <Route path='report/usedhoursoftrucks' element={<UsedHoursOfTrucks/>}/>
        <Route path='report/maincitiesreports'element={<ReportsOfMainCities/>}/>
        <Route path='report/reportsofroutes' element={<ReportsOfRoutes/>}/>
        <Route path='report/customerorderreports' element={<CustomerOrderReport/>}/>


        <Route path='/admin-control' element={<ManagerControl />} />

      </Routes>
    </>
  );
};

// Wrap the App component with Router outside
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
