function showRating(num) {
    rating = '';
    for (let i = 0; i < Math.floor(num); ++i) {
        rating = rating + "*";
        if (i !== Math.floor(num) - 1) {
            rating += " ";
        }
    }
    if (num > Math.floor(num)) {
        rating += " ."
    }
    return rating
}

//console.log(showRating(5.5))

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b) // Sort by number value, not alphabeticlay
}

// console.log(sortLowToHigh([30, 10, 15, 100021, 22, 50]));

/* function sortHighToLow(arr) {
    return arr.sort((a, b) => b.price - a.price)
}

console.log(sortHighToLow([{
        id: 1,
        price: 50
    },
    {
        id: 3,
        price: 30
    },
    {
        id: 2,
        price: 60
    },
    {
        id: 4,
        price: 10
    }
])) */

/* async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

    const res = await promise.json();

    const posts = res.filter(element => element.userId === userId)

    console.log(posts)
} */

/* postsByUser(5); */

async function firstSixIncomplete(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const res = await promise.json();

    const completion = res.filter(element => !element.completed).slice(0, 6)

    /*         let newArr = [];

            for (let i = 0; i < 6; i++) {  //MY TAKE
                newArr[i] = completion[i]
            }
        console.log(newArr)
     */
    console.log(completion)
}

firstSixIncomplete(false)