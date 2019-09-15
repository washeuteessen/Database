//Improve the speed of the queries by indexing the specific fields

// For improved speed of the parser
db.recipes.createIndex({url:1})

// For improved speed of the crawler (10000 times faster than before)
db.recipes_raw.createIndex({url:1})