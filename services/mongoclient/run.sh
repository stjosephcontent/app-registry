#!/bin/bash

DIR="$(git rev-parse --show-toplevel)"
source $DIR/vars.sh
servicename=mongoclient
imagename="sean9999/${project}-${appname}-${servicename}:$branch"
containername="${project}-${appname}-${branch}-${servicename}"
linkto=${containername//mongoclient/mongodb}

#   seeding the database from config/mongodb/* files

docker run \
	-v $DIR/config/mongodb/:/scripts \
	--link $linkto:mongodb \
	$imagename \
    sh -c 'exec mongo "$MONGODB_PORT_27017_TCP_ADDR:$MONGODB_PORT_27017_TCP_PORT/app-reg" *'
