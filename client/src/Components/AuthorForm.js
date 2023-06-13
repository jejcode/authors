import React, {useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AuthorForm = (props) => {
    const {id} = useParams()
    const {formResponse, initialName, title} = props
    const [name, setName] = useState(initialName)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        formResponse(id, {name})
        navigate('/authors')


    }

    const cancelForm = () => {
        navigate('/authors')
    }

    return (
        <>
            <Link to={'/authors'}>Home</Link>
            <h3>{title}</h3>
            <div className="bg-light p-4 rounded">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label className="form-label" htmlFor="authorName">Name:</label>
                        <input className="form-control mb-2" type="text" name="authorName" id="authorName" onChange={(e) => {setName(e.target.value)}} value={name}/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-secondary me-2" type="button" onClick={() => cancelForm()}>Cancel</button>
                        <input className="btn btn-sm btn-primary" type="submit" value="Save" />
                    </div>
                </form>

            </div>
        </>
    )
}

export default AuthorForm