import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllAuthors, deleteAuthorById } from "../services/author-service";

const AuthorList = (props) => {
    // const {setNameToEdit} = props
    const [loaded, setLoaded] = useState(false)
    const [authors, setAuthors] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getAllAuthors()
            .then( authorList => {
                setAuthors(authorList.sort((a,b) => {
                    const nameA = a.name.toUpperCase()
                    const nameB = b.name.toUpperCase()

                    if(nameA < nameB) return -1
                    if(nameA > nameB) return 1
                    return 0
                }))
                setLoaded(true)
            })
            .catch( err => console.log(err))
    }, [])

    const deleteThisAuthor = (authorId) => {
        deleteAuthorById(authorId)
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    const editThisAuthor = (authorId) => {
        // setNameToEdit(authorId.name)
        navigate(`/authors/${authorId}/edit`)

    }
    return (
        <>
            <Link to='/authors/new'>Add an author</Link>
            {loaded ?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author,index) => {
                            return (
                                <tr key={index}>
                                    <td >{author.name}</td>
                                    <td>{
                                        <>
                                            <button className="btn btn-sm mx-2 btn-warning" onClick={(e) => editThisAuthor(author._id)}>Edit</button>
                                            <button className="btn btn-sm mx-2 btn-danger" onClick={(e) => deleteThisAuthor(author._id)}>Delete</button>
                                        </>
                                        }</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            :
            <p>An error occurred.</p>    
            }
        </>
    )
}

export default AuthorList