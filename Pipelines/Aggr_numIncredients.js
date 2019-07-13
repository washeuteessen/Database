// Pipeline
// Show ingredients and how often they appear
db.recipes.aggregate(
    [
    {
// Take only ingredients
	$project:{'ingredients':1}},
// ingredients is a list for every recipe, unwind list of lists to list
	{$unwind:'$ingredients'},
// group by ingredients and count
    {    $group: {
            _id: '$ingredients',
            count: { $sum: 1 }
        }
    },
// Descending Order
    { $sort : { count : 1} }
    ]
)