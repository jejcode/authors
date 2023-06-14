const Author = require('../models/author.model')
module.exports = {
    findAllAuthors : (req, res) => {
        Author.find()
            .then(allAuthors => {
                res.json(allAuthors)
            })
            .catch(err => {
                res.json({ message: 'Something went wrong.', error: err})
            })
    },

    findAuthor : (req, res) => {
        Author.findOne({_id: req.params.id})
        .then( Author => {
            console.log(Author)
            res.json(Author)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    createOneAuthor : (req,res) => {
        Author.create(req.body)
            .then( newAuthor => {
                res.json(newAuthor)
            })
            .catch(err => res.status(400).json(err))
    },

    updateAuthor : (req,res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then( updatedAuthor => {
                res.json(updatedAuthor)
            })
            .catch(err => res.status(400).json(err))
    },

    deleteAuthor : (req, res) => {
        Author.findByIdAndDelete({_id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    }
    
}