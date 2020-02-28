import express from 'express';
const server = express();
const PORT = 3001;

server.get('/', (req, res)=>{
  res.send('GET method')
})
server.post('/', (req, res)=>{
  res.send('POST method')
})
server.patch('/', (req, res)=>{
  res.send('PATCH method')
})
server.delete('/', (req, res)=>{
  res.send('DELETE method')
})

server.listen(PORT, ()=>{
  console.log(`server is running t port : ${PORT}`)
})