import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const createAuthor = async (formData) => {
    try{
        const author = await instance.post('/authors', formData)
        return author.data
    }
    catch (err) {
        throw err
    }
}
const getAllAuthors = async () => {
    try {
        const authors = await instance.get('/authors')
        return authors.data
    }
    catch (err){
        console.log(err)
        throw(err)
    }
}

const getOneAuthor = async (authorId) => {
    try{
        const author = await instance.get(`/authors/${authorId}`)
        return author.data
    }
    catch (err) {
        throw err
    }
}

const updateOneAuthor = async (authorId, formData) => {
    try{
        const author = await instance.put(`/authors/${authorId}`, formData)
        return author.data
    }
    catch (err) {
        throw err
    }
}

const deleteAuthorById = async (authorId) => {
    try{
        const res = await instance.delete(`/authors/${authorId}`)
        return res.data
    }
    catch (err) {
        throw err
    }
}
export {
    createAuthor,
    getAllAuthors,
    getOneAuthor,
    updateOneAuthor,
    deleteAuthorById
}