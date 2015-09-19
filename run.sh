#!/bin/bash

DIR="$(git rev-parse --show-toplevel)"
source $DIR/vars.sh

#   run all services, but wait 5 seconds in between to allow linking to work properly
#   specify the services exactly, because it matters what order they are launched in

echo "running services..."
for service in mongodb mongoclient nodejs; do
    bash $DIR/services/$service/run.sh && sleep 5;
done

echo "services are now running"