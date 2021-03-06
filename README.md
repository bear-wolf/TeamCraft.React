# TeamCraft.React

$ docker-compose up -d --build
$ docker-compose stop

docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

//STOP all process
docker rm $(docker ps -a -q)

// List of images
docker images

# My configuration
  - add tag  ## docker tag lomobile:latest lomobile:lomobile
  - docker container ls #get list of containers
  - docker create <name> ## created an image of project
  - docker image push <tag name> ## push to hub.docker repository
  - docker login -u "<your userId>" -p "<your password>" docker.io   ##auth of docker

# Build
  docker build --tag <name> <relative path of directory>  //create a image from current project

# Steps to reproduce the behavior
git clone https://github.com/docker-teamcenter/tc-common/blob/master/Dockerfile
docker build -t tc-common .
docker tag <container-id> drewmullen/tc-common
docker login (successful)
docker push drewmullen/tc-common


# Options
--config string      Location of client config files (default "/home/andrew/.docker")
-c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with "docker context use")
-D, --debug              Enable debug mode
-H, --host list          Daemon socket(s) to connect to
-l, --log-level string   Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
--tls                Use TLS; implied by --tlsverify
--tlscacert string   Trust certs signed only by this CA (default "/home/andrew/.docker/ca.pem")
--tlscert string     Path to TLS certificate file (default "/home/andrew/.docker/cert.pem")
--tlskey string      Path to TLS key file (default "/home/andrew/.docker/key.pem")
--tlsverify          Use TLS and verify the remote
-v, --version            Print version information and quit


# Commands
Commands:
attach      Attach local standard input, output, and error streams to a running container
build       Build an image from a Dockerfile
commit      Create a new image from a container's changes
cp          Copy files/folders between a container and the local filesystem
create      Create a new container
diff        Inspect changes to files or directories on a container's filesystem
events      Get real time events from the server
exec        Run a command in a running container
export      Export a container's filesystem as a tar archive
history     Show the history of an image
images      List images
import      Import the contents from a tarball to create a filesystem image
info        Display system-wide information
inspect     Return low-level information on Docker objects
kill        Kill one or more running containers
load        Load an image from a tar archive or STDIN
login       Log in to a Docker registry
logout      Log out from a Docker registry
logs        Fetch the logs of a container
pause       Pause all processes within one or more containers
port        List port mappings or a specific mapping for the container
ps          List containers
pull        Pull an image or a repository from a registry
push        Push an image or a repository to a registry
rename      Rename a container
restart     Restart one or more containers
rm          Remove one or more containers
rmi         Remove one or more images
run         Run a command in a new container
save        Save one or more images to a tar archive (streamed to STDOUT by default)
search      Search the Docker Hub for images
start       Start one or more stopped containers
stats       Display a live stream of container(s) resource usage statistics
stop        Stop one or more running containers
tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
top         Display the running processes of a container
unpause     Unpause all processes within one or more containers
update      Update configuration of one or more containers
version     Show the Docker version information
wait        Block until one or more containers stop, then print their exit codes


# Help
Management Commands:
app*        Docker App (Docker Inc., v0.9.1-beta3)
builder     Manage builds
buildx*     Build with BuildKit (Docker Inc., v0.5.1-docker)
config      Manage Docker configs
container   Manage containers
context     Manage contexts
image       Manage images
manifest    Manage Docker image manifests and manifest lists
network     Manage networks
node        Manage Swarm nodes
plugin      Manage plugins
secret      Manage Docker secrets
service     Manage services
stack       Manage Docker stacks
swarm       Manage Swarm
system      Manage Docker
trust       Manage trust on Docker images
volume      Manage volumes



//Remove container
docker container rm [OPTIONS] CONTAINER [CONTAINER...]
// Need stop container and then remove it
docker container rm 58526e83f130 --force

docker image rm docker_sample:latest


docker info
