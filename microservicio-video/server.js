
const express = require('express');
const path = require('path');
const app = express();
const port = 3007;


const videoDirectory = path.join(__dirname, 'videos');


app.use(express.static(path.join(__dirname, 'frontend')));


app.use('/videos', express.static(videoDirectory));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});


app.get('/api/video', (req, res) => {
  const videoPath = path.join(videoDirectory, 'mi_video.mp4');
  res.sendFile(videoPath);
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
