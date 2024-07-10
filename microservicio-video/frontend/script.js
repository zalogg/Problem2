
document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('myVideo');
    const videoSource = document.getElementById('videoSource');
  
    fetch('/api/video')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el video');
        }
        return response.blob();
      })
      .then(blob => {
        const videoURL = URL.createObjectURL(blob);
        videoSource.src = videoURL;
        videoElement.load();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  