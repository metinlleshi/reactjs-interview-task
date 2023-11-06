import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import ButtonWithIconOnRight from '../../shared/ButtonWithIconOnRight';
import NotesList from './NotesList';
import SearchFilter from './SearchFilter';
import NoteForm from '../create-note/NoteForm';
import { getPosts } from '../../../api/axios';

import './NotesList.css';

function NotesListPage() {
  const [results, setResults] = useState([]);
  const [selectedNote, setSelectedNote] = useState(undefined);
  React.useEffect(() => {
    async function getData() {
      var res = await getPosts();
      setResults(res);
    }

    getData();
  }, []);

  return (
    <div className='notes-page-content'>
      <div className="notes-list">
        <div className="notes-list-header">
          <ButtonWithIconOnRight
            label="Create Note"
            onClickHandler={() => { }}
            customClasses={['success-button']}
            icon={<AiOutlinePlus />}
          />
          <SearchFilter posts={results} setSearchResults={setResults} />
        </div>
        <NotesList searchResults={results} setSelectedNote={setSelectedNote} />
      </div>
      {selectedNote && <NoteForm key={selectedNote?.id} editing={true} note={selectedNote} />}
    </div>
  );
}

export default NotesListPage;
