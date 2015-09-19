#!/bin/bash

DIR="$(git rev-parse --show-toplevel)"
source $DIR/vars.sh

for service in $services; do
    cd $DIR/services/$service && bash build.sh;
done

echo "all done building services: $services"