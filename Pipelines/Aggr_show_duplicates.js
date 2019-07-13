// Pipeline
// show all duplicates
db.recipes.aggregate([
// group by _id:url
    {$group: {
        _id: {url: "$url"},
// Create Field uniqueIds, which contains the _id of every object with the group id
        uniqueIds: {$addToSet: "$_id"},
// Length of uniqueIds
        count: {$sum: 1}
        }
    },
// Filter for count greater than 1
    {$match: { 
        count: {"$gt": 1}
        }
    }
]);

// Pipeline
// Show number of duplicates per domain
db.recipes.aggregate([
// group by _id:url
    {$group: {
        _id: {url: "$url"},
// Create Field uniqueIds, which contains the _id of every object with the group id
        uniqueIds: {$addToSet: "$_id"},
// Length of uniqueIds
        count: {$sum: 1}
        }
    },
// Filter for count greater than 1
    {$match: { 
        count: {"$gt": 1}
        }
    },
// Group by _id:domain and count number of occurences
    {    $group: {
            _id: '$domain',
            countDoubles: { $sum: 1 }
        }
    },
// Sort descendings
    { $sort : { countDoubles: -1} }
])