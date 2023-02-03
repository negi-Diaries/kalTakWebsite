
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const pageSize = 20;
  const apiKey= process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" apiKey={apiKey} category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" apiKey={apiKey} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" apiKey={apiKey} category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" apiKey={apiKey} category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" apiKey={apiKey} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" apiKey={apiKey} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" apiKey={apiKey} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" apiKey={apiKey} category="technology" />} />


          </Routes>
        </BrowserRouter>
      </div>
    )
  
}

export default App

