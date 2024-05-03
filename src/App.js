import React from 'react';
import './App.scss'; // Import SCSS file
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/Notfound';
import {useDispatch} from 'react-redux';
import ReduxDispatchSingleton from './services/reduxDispatchSingleton';
import MainLayout from './components/MainLayout';

function App() {
  const dispatch = useDispatch();
  ReduxDispatchSingleton.setDispatch(dispatch);

  return (
    <Router>
      <MainLayout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </MainLayout>
    </Router>
  );
}

export default App;
