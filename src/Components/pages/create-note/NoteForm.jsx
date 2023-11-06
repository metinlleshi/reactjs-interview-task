import React, { version } from 'react';
import './NoteForm.css';
import { AiOutlineCheck } from "react-icons/ai";
import { MdDelete } from 'react-icons/md';
import ButtonWithIconOnRight from '../../shared/ButtonWithIconOnRight';


function NoteForm({ editing, note }) {
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
      <div className='note-form-body'>
        <div className='note-title'>
          <input type="text" placeholder="Add a title" defaultValue={note?.title} />
        </div>
        <hr />
        <div className='note-content'>
          <textarea defaultValue={note?.body} placeholder="Write your note here..."></textarea>
        </div>
      </div>
      <div className='note-form-footer'>
        <ButtonWithIconOnRight
          label="Delete Note"
          onClickHandler={() => { }}
          icon={<MdDelete />}
          customClasses={editing ? ['delete-note-btn'] : ['delete-note-btn', 'invisible']}
        />
        <ButtonWithIconOnRight
          label="Save Changes"
          onClickHandler={() => { }}
          icon={<AiOutlineCheck />}
          customClasses={['save-note-btn']}
        />
      </div>
    </div>
  );
}

export default NoteForm;
