FROM mongo:4.0.10
COPY ./dump/ /dump
ENTRYPOINT mongod
EXPOSE 27017:27017
#WORKDIR /
#CMD ["mongorestore","./dump"]
