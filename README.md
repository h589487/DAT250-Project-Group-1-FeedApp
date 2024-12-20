# DAT250-Project-Group-1-FeedApp

## Prerequisites

Before running the application, ensure the following software is installed:

- `Docker`
- `Docker needs to be running at the local computer`

## How to run backend

Pull the backend docker image:

`docker pull kristofferwagen/poll-app-container:backend`

Run the container:

`docker run -d -p 3000:3000 kristofferwagen/poll-app-container:backend`

## How to run frontend

Pull the frontend docker image:

`docker pull kristofferwagen/poll-app-container:frontend`

Run the container:

`docker run -d -p 5173:80 kristofferwagen/poll-app-container:frontend`

`NOTE` you should run the backend container before running the frontend container.

After doing this, the application will be available at `http://localhost:5173/`

## Docker images

If you want to take a closer look to how and where the images are hosted, you can check them out here:
`https://hub.docker.com/repository/docker/kristofferwagen/poll-app-container/general`

## How it works

### Backend

The backend server runs on `http://localhost:3000` and provides the following functionalities:

- Creating polls
- Fetching polls and their vote options
- Updating vote counts
- Clearing the database

### Frontend

The frontend runs on `http://localhost:5173` and enables users to:

- Create polls with multiple vote options
- Vote on poll options
- View all polls and their respective vote counts
- Clear the database from the interface

### Database

The Postgre database is dynamically created with the required user and privileges when running the containers. When the backend starts the tables in the database will be generated automatically and all data will be stored in MongoDB and persistently in PostgreSQL.

## Troubleshooting

### Backend issues

- Make sure you have the latest version of the backend image. You can double check by pulling once more, see `How to run backend`

### Frontend issues

- Make sure you have the latest version of the frontend image. You can double check by pulling once more, see `How to run frontend`

### Port issues

- Make sure that the ports `3000` for the backend, `5672` for RabbitMQ, `5173` for frontend and `5432` for PostgreSQL are not blocked by the firewall.
- Make sure that all the listed ports are free and are not being used by any other processes.
