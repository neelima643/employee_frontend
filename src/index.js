import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateEmployee from './pages/createEmployee';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeList from './pages/EmployeeList';
import Counter from './pages/counter.jsx';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import EmployeeDetails from './pages/employeeDetails';
import UpdateEmployee from './pages/updateEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/counter' element={ <Counter/> } />
        <Route path='/list' element={<EmployeeList />} />
        <Route path='/create' element={<CreateEmployee />} />
        <Route path=':id/details' element={<EmployeeDetails />} />
        <Route path=':id/update' element={<UpdateEmployee />} />
      </Routes>
    </Provider>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
