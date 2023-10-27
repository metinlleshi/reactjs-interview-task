import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Category from './Components/Category';
import MyRoutes from './Components/MyRoutes';

function App() {
  return (
    <header className="parent">
      <div className="header">
        <Header />
      </div>
      <div className="sideBar">
        <Category />
      </div>
      <MyRoutes />
    </header>
  );
}

export default App;
