const app = require('http').createServer(handler)
const io = require('socket.io').listen(app)
const fs = require('fs')
const path = require('path')

app.listen(8000)

function handler (req, res) {
  fs.readFile(path.join(__dirname, '/client.html'),
  function (err, data) {
    if (err) {
      res.writeHead(500)
      return res.end('Error loading index.html')
    }
    res.writeHead(200)
    res.end(data)
  })
}
