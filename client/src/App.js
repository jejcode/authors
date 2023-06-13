import './App.css';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorList from './Components/AuthorList';
import AuthorForm from './Components/AuthorForm';
import { createAuthor, updateOneAuthor} from './services/author-service';

function App() {
  const [nameToEdit, setNameToEdit] = useState("")
  const createNewAuthor = (doNotUse, formData) => {
    createAuthor(formData)
  }

  const updateThisAuthor = (authorId, formData) => {
    updateOneAuthor(authorId,formData)
  }
  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <h1>Favorite Authors</h1>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthorList setNameToEdit={setNameToEdit}/>} path='/authors' default/>
            <Route element={<AuthorForm formResponse={createNewAuthor} initialName="" title="Add a new author"/>} path='/authors/new' default/>
            <Route element={<AuthorForm formResponse={updateThisAuthor} initialName={nameToEdit} title="Edit this author"/>} path='/authors/:id/edit' default/>

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
