# Include Image
FROM mongo:4.0.10
# Import the dump file from the Productive Database
COPY ./dump/ /dump
# Define the entry point for external connection
ENTRYPOINT mongod
# Define the exposed Ports
EXPOSE 27017:27017
# Fix the hostname as "localhost"
RUN echo $(grep $(hostname) /etc/hosts | cut -f1) localhost >> /etc/hosts
# Restore the mongodb 
#WORKDIR /
#CMD ["mongod"]
#    ["mongorestore","./dump"]
    
