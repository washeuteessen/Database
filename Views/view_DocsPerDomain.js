//Improve the speed of the queries by indexing the domain field

////

////

//Pipeline
//Define pipeline to show number of recipe documents per domain

// Create Index for domain field for improved speed
db.recipes.createIndex(
    // Create an Index on the Field domain in ascending order
    {"domain":1},
    // Set the name of the new index
    {name: "recipe_domains"}
)

//Call aggregate function for the pipeline
db.recipes.aggregate(
    [
        {
        //project: only the fields domain and _id are given to the next stages
        $project: {'$domain':1}
        },
        {
        //Group by _id = "domain" with new field count, which is defined as the function $sum
        $group: {
            _id: '$domain',
            count: { $sum: 1 }
        }
    },
    //Sort the output descending by the field count
    { $sort : { count : -1} }
    ]
)

//Views

//View for collection recipes

db.createView(
//Name of View
	"View_DocsPerDomain_recipes",
    //Name of collection
	"recipes",
    [
        {
            //project: only the fields domain and _id are given to the next stages
            $project: {'$domain':1}
        },
        {
        //Group by _id = "domain" with new field count, which is defined as the function $sum
        $group: {
            _id: '$domain',
            count: { $sum: 1 }
        }
    },
    //Sort the output descending by the field count
    { $sort : { count : -1} }
    ]
)

// View for collection recipes_raw

// Create Index for domain field for improved speed
db.recipes_raw.createIndex(
    // Create an Index on the Field domain in ascending order
    {"domain":1},
    // Set the name of the new index
    {name: "recipe_domains"}
)


db.createView(
    //Name of View
        "View_DocsPerDomain_recipesraw",
        //Name of collection
        "recipes_raw",
        [
            {
                //project: only the fields domain and _id are given to the next stages
                $project: {'$domain':1}
            },
            {
            //Group by _id = "domain" with new field count, which is defined as the function $sum
            $group: {
                _id: '$domain',
                count: { $sum: 1 }
            }
        },
        //Sort the output descending by the field count
        { $sort : { count : -1} }
        ]
    )