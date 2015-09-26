#!/bin/bash

DIR="$(git rev-parse --show-toplevel)"
source $DIR/vars.sh
servicename=mongoclient
imagename="sean9999/${project}-${appname}-${servicename}:$branch"
containername="${project}-${appname}-${branch}-${servicename}"
linkto=${containername//mongoclient/mongodb}

#   a mongo shell for you, sir

docker run -it \
    -v $DIR/config/mongodb/:/scripts \
    --link $linkto:mongodb \
    $imagename \
    sh -c 'mongo "$MONGODB_PORT_27017_TCP_ADDR:$MONGODB_PORT_27017_TCP_PORT/app-reg"'