import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Category from './Components/Category';
import Notes from './Components/Notes';
import Vector from './Components/images/Vector.svg';
import NoteForm from './Components/NoteForm';

function App() {
  return (
    <header className="parent">
      <div className="header">
        <Header />
      </div>
      <div className="sideBar">
        <Category />
      </div>
      <div className="notes">
        <NoteForm />
      </div>
    </header>
  );
}

export default App;
