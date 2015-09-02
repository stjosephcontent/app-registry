#!/bin/bash

docker kill qdgui 2> /dev/null
docker rm qdgui 2> /dev/null

docker run -t -p 8080:8080 -v $PWD:/usr/src/app --link mongo:mongo --name qdgui sean9999/qdgui
