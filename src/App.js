import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Category from './Components/Category';

import NoteForm from './Components/NoteForm';
import CreateNote from './Components/CreateNote';
import EditNote from './Components/EditNote';

function App() {
  return (
    <header className="parent">
      <div className="header">
        <Header />
      </div>
      <div className="sideBar">
        <Category />
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<NoteForm />}></Route>
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path="/create-note" element={<CreateNote />}></Route>
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path="/edit-note" element={<EditNote />}></Route>
        </Routes>
      </Router>
    </header>
  );
}

export default App;
