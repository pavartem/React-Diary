import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => (
    <div className='container-fluid p-0'>
        <div className='row'>
          <div className="col-lg-2">
            <Sidebar/>
          </div>
          <div className="col-lg-10">
            <Main/>
          </div>
        </div>
    </div>
);

export default App;
