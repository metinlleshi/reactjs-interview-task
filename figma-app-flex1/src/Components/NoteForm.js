import React from 'react';
import './NoteForm.css';

function NoteForm() {
  return (
    <div>
      <button type="button" className="bluebutton"></button>
      <button type="button" className="bluebutton"></button>
      <button type="button" className="greenbutton"></button>
      <button type="button" className="boxbutton"></button>
      <button type="button" className="boxbutton"></button>
      <button type="button" className="boxbutton"></button>
      <form className="title">
        <label>
          <input type="text" placeholder="Add a title" />
        </label>
      </form>

      <form className="description">
        <label>
          <input type="text" placeholder="Write your note here..." />
        </label>
      </form>
    </div>
  );
}

export default NoteForm;
