import './App.css';
// import Details from './components/Details';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import NewsComponent from './components/NewsComponent';
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  

  return (
    <div className="App">

      <Navbar />
      <LoadingBar
        height={3}
        color='skyblue'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/details" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} category='general' country='in' />} />
        <Route exact path="/business" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} category='business' country='in' />} />
        <Route exact path="/science" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} category='science' country='in' />} />
        <Route exact path="/entertainment" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} category='entertainment' country='in' />} />
        <Route exact path="/health" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} category='health' country='in' />} />
        <Route exact path="/sports" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} category='sports' country='in' />} />
        <Route exact path="/technology" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} category='technology' country='in' />} />
        <Route exact path="" element={<Home />} />
      </Routes>






    </div>
  );
}

export default App;
