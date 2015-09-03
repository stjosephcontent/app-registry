#!/bin/bash

DIR="$(git rev-parse --show-toplevel)"

docker build -t sean9999/qdgui .