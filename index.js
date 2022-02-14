require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
const Note = require('./models/note');

app.use(static('build'));
app.use(json());
app.use(requestLogger);
app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>hello world<h1>')
})

app.get('/about/', (req, res) => {
  res.send(
    "<h1>Mohamad Krayem</h1>"
  );
})

app.get('/api/notes/', (request, response) => {
  const body = request.body;

  if(body.content === undefined) return response.status(400).json({ error: 'content missing' });

  find({}).then(notes => {
    response.json(notes);
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  findById(request.params.id)
    .then(note=>{
      if(note) response.json(note);
      else response.status(404).end();
    })
    .catch(error => next(error))
})

app.get('/api/', (request, response)=>{
  response.send('<a href="http://localhost:3001/api/notes">notes</a>')
})

app.delete('/api/notes/:id', (request, response, next) => {
  findByIdAndRemove(request.params.id)
    .then(result =>{
      response.status(204).end();
    })
    .catch(error => next(error))
})

app.post('/api/notes', (request, response, next) => {
  const body = request.body;
  
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    data: new Date(),
  })

  note.save()
    .then(savedNote => {
      response.json(savedNote);
    })
    .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
  const { content, important } = request.body;

  const note = {
    content: body.content,
    important: body.important,
  }

  findByIdAndUpdate(request.params.id, { content, important }, {new: true, runValidators: true, context: 'query' })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

function requestLogger(request, response, next){
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}


function unknownEndpoint(request, response){
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === "ValidationError") {
    return response.status(400).json(({ error: error.message }));
  }
  
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })