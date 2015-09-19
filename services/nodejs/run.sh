#!/bin/bash

DIR="$(git rev-parse --show-toplevel)"
source $DIR/vars.sh
servicename=nodejs
containername=${project}-${appname}-${branch}-${servicename}
imagename=sean9999/${project}-${appname}-${servicename}:$branch

docker stop $containername 2> /dev/null
docker rm $containername 2> /dev/null

docker run -P -d \
	--name $containername \
	--link ${project}-${appname}-${branch}-mongodb:mongodb \
	-v $DIR/services/$servicename:/usr/src/app \
	-v $DIR/logz/$servicename:/logz \
	$imagename
