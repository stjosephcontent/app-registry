#!/bin/bash

DIR="$(git rev-parse --show-toplevel)"
source $DIR/vars.sh
servicename=mongoclient
imagename="sean9999/${project}-${appname}-${servicename}:$branch"

echo "building $imagename..."

docker build -t $imagename $DIR/services/$servicename
