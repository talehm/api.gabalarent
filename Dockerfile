FROM ubuntu:latest

# Install Git
RUN apt-get update && \
    apt-get install -y git

# Install curl and Heroku CLI
RUN apt-get install -y curl
RUN curl https://cli-assets.heroku.com/install.sh | sh

WORKDIR /app

# Clone a Git repository (replace the URL with your Git repository)
RUN git clone https://github.com/talehm/api.gabalarent.git

CMD ["/bin/bash"]
