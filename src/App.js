import React from 'react';
import './App.scss'; // Import SCSS file
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/Notfound';
import {useDispatch} from 'react-redux';
import ReduxDispatchSingleton from './services/reduxDispatchSingleton';
import MainLayout from './components/MainLayout';
import Login from './components/Login/Login';
import PrivateRoute from './components/utilities/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  ReduxDispatchSingleton.setDispatch(dispatch);
  return (
    <Router>
      <MainLayout>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </MainLayout>
    </Router>
  );
}

export default App;
