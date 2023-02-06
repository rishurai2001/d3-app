import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from '../components/DashboardPage';
import PageNotFound from '../components/PageNotFound';

export const history = createBrowserHistory();

const AppRouter = () => (
   
  <Router history={history}>
    <div>    
    
      <Routes>
        <Route  exact path='/' element={<DashboardPage/> } />
        <Route path='/h' element={<PageNotFound />} />
      </Routes>
      </div>
  </Router>
    // <>Hello</> 
);

export default AppRouter;