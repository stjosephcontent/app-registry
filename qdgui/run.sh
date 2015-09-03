#!/bin/bash

docker kill qdgui 2> /dev/null
docker rm qdgui 2> /dev/null

# --link mongo:mongo --name qdgui \

docker run -t -p 8080:8080 \
    -v $PWD:/usr/src/app \
    --label=io.sjc.manager=orchestra \
    sean9999/qdgui
