import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NoteBody from './NoteBody';
import './EditNote.css';
import KrijoNote from './KrijoNote';

function EditNote() {
  return (
    <div className="main1div">
      <div className="childdiv4">
        <KrijoNote />
      </div>
      <div className="childdiv3">
        <button type="button" className="bluebutton2"></button>
        <button type="button" className="bluebutton3"></button>
        <button type="button" className="greenbutton2"></button>

        <div className="boxbuttons2">
          <button type="button" className="boxbutton2"></button>
          <button type="button" className="boxbutton3"></button>
          <button type="button" className="boxbutton4"></button>
        </div>
        <div className="divtext">
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
