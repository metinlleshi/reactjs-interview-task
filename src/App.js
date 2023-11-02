import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Content />
    </>
  );
}

export default App;
