# Online Store - Microservice for Serving Video

Members: Jonathan Chasipanta - Gonzalo Guachamin
This project is a Node.js and Express microservice that serves a video from a local directory, along with a user interface.

## Requirements

- Node v20.13.1
- Docker version 26.0.0 

## Installation

1. Clona este repositorio:
    ```bash
    git clone https://github.com/JonathanP06511/P3M1-microservicioVideo.git
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
     ```bash
      node server.js
    ```

2. Open your browser and navigate to http://localhost:3003 to view the frontend interface.
## Docker Usage

1. Build the Docker image:
    ```bash
    docker build -t image-name .
    ```

2. Run a container using the created image:
    ```bash
    docker run -p 8080:3003 -d --name container_name image_name
    ```

3. Open your browser and navigate to http://localhost:8080 to view the frontend interface.

## Endpoints

- `GET /`: Returns the index.html file.
- `GET /api/video`: Returns the video.

