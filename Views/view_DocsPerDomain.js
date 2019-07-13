//Pipeline
//Define pipeline to show number of recipe documents per domain

//Call aggregate function for the pipeline
db.recipes.aggregate(
    [
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

//View

db.createView(
//Name of View
	"DocsPerDomain",
    //Name of collection
	"recipes",
    [
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