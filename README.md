# Repository for MongoDB scripts

## Pipelines
* Show duplicates:
* Delete duplicates:
* Number of ingredients:

## Views
* DocsPerDomain: 
* UnparsedUrls:

## Backup MongoDB

1. Create Dump of MongoDB

    In terminal of MongoDB Pod:
```
mongodump --out /data/db
```

2. Download Dump

    Log into Openshift at local windows Terminal, then copy the dump folder to local:
```
oc cp mongo-2-6v94s:/data/db/dump/ ../dump/
```

3. Build Docker Image


console to git dir ./Other:
```
docker build .
```

4. Start image

Get name of docker in console
```
docker container ls
```

```
docker run -p 27017:27017 IMAGENAME
```

5. Restore dump

Get Name of Docker
```
docker ps
```

Restore Dump
```
docker exec -it NAMEOFDOCKER mongorestore ./dump
```


