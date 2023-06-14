import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneAuthor } from "../services/author-service";

const AuthorForm = (props) => {
    const {id} = useParams()
    const {formResponse, title} = props
    const [name, setName] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if(id) {
            getOneAuthor(id)
                .then(author => {
                    setName(author.name)
                    setLoaded(true)
                })
                .catch(err => {
                    navigate('/authors/not-found')})
        } else {
            setLoaded(true)
        }

    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        formResponse(id, {name})
            .then(res => {
                navigate('/authors')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                setErrors(errorResponse)
            })
    }

    const cancelForm = () => {
        navigate('/authors')
    }

    return (
        <div>
            {loaded &&
                <>
                    <Link to={'/authors'}>Home</Link>
                    <h3>{title}</h3>
                    <div className="bg-light p-4 rounded">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <label className="form-label" htmlFor="authorName">Name:</label>
                                <input className="form-control mb-2" type="text" name="authorName" id="authorName" onChange={(e) => {setName(e.target.value)}} value={name}/>
                                {errors.name && <p className="text-danger mb-2">{errors.name.message}</p>}
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-secondary me-2" type="button" onClick={() => cancelForm()}>Cancel</button>
                                <input className="btn btn-sm btn-primary" type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                </>
            }
        </div>
    )
}
export default AuthorForm