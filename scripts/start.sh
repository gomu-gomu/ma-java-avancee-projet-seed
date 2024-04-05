#!/bin/sh

tag="0.0.1"
username="gomu-gomu"
project="ma-java-avancee-projet-seed"
image="$username/$project:$tag"

docker build -f ./docker/Dockerfile -t $image .
docker run -it --rm --network=docker_default -v "$(pwd)":/usr/src/app $image