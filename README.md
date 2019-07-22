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