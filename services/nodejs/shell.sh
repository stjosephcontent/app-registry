#!/bin/bash

DIR="$(git rev-parse --show-toplevel)"
branch="$(git rev-parse --abbrev-ref @)"
servicename=nodejs
containername=${project}-${appname}-${branch}-${servicename}

#	shell into nodejs
docker exec -it $containername /bin/bash
