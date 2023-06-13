const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.post('/api/authors', AuthorController.createOneAuthor)
    app.get('/api/authors/:id', AuthorController.findAuthor)
    app.put('/api/authors/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}