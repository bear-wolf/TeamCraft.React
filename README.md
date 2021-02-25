# TeamCraft.React

$ docker-compose up -d --build
$ docker-compose stop

docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

//STOP all process
docker rm $(docker ps -a -q)

// List of images
docker images


//Remove container
docker container rm [OPTIONS] CONTAINER [CONTAINER...]
// Need stop container and then remove it
docker container rm 58526e83f130 --force


docker info
