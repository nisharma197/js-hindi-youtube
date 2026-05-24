const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => 
    { //console.log(`acc: ${acc} and curr: ${curr}`);
    return acc+curr
}, 0 )

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "java course",
        price: 899
    },
    {
        itemName: "c++ course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc+ item.price
}, 0)

console.log(priceToPay);
