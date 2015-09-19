FROM ubuntu:vivid
MAINTAINER Sean Macdonald <sean.macdonald@stjoseph.com>

RUN mkdir /scripts

RUN apt-get update \
	&& apt-get upgrade -y \
	&& apt-get install mongodb-clients -y

WORKDIR "/scripts"

CMD ["/bin/bash"]
