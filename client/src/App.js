import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorList from './Components/AuthorList';
import AuthorForm from './Components/AuthorForm';
import AuthorNotFound from './Components/AuthorNotFound';
import { createAuthor, updateOneAuthor} from './services/author-service';

function App() {
  const createNewAuthor = (doNotUse, formData) => {
    return createAuthor(formData)
  }

  const updateThisAuthor = (authorId, formData) => {
    return updateOneAuthor(authorId,formData)
  }
  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <h1>Favorite Authors</h1>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthorList />} path='/authors' default/>
            <Route element={<AuthorForm formResponse={createNewAuthor} title="Add a new author" />} path='/authors/new' default/>
            <Route element={<AuthorForm formResponse={updateThisAuthor}  title="Edit this author" />} path='/authors/:id/edit' default/>
            <Route element={<AuthorNotFound />} path='/authors/not-found'/>

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
