FROM mongo:4.0.10
COPY ./dump/ /dump
ENTRYPOINT mongod
WORKDIR /
CMD ["mongod"]
CMD ["mongorestore","./dump"]
