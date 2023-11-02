import React, { version } from 'react';
import './NoteForm.css';
import Vector from './images/Vector.svg';

function NoteForm({ editing }) {
  return (
    <div className="note-form">
      <div className="note-form-head">
        <div className="buttons-group-left">
          <button type="button" className="bluebutton"></button>
          <button type="button" className="bluebutton"></button>
          <button type="button" className="greenbutton"></button>
        </div>
        <div className="buttons-group-right">
          <button type="button" className="boxbutton"></button>
          <button type="button" className="boxbutton"></button>
          <button type="button" className="boxbutton"></button>
        </div>
      </div>
      <div className="note-form-body">
        <div className="note-title">
          <input type="text" placeholder="Add a title" />
        </div>
        <hr />
        <div className="note-content">
          <textarea placeholder="Write your note here..."></textarea>
        </div>
      </div>
      <div className="note-form-footer">
        {editing && <button>Delete note</button>}
        <button className="primary-button">
          Save Changes
          <img src={Vector} />
        </button>
      </div>
    </div>
  );
}

export default NoteForm;
