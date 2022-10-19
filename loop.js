// const a = [ 2, 3, 4, 5 ]

// sync
// for(let i =0; i< a.length; i++) {
//     console.log(a[i])
// }


// for(const e of a) {
//     console.log(e)
// }

// async
// a.forEach((element, index) => {
//     console.log(element, "   ", index)
// });


const carProperties = [
    {
        name: "tata",
        model: "i20",
        old: 30,
        numberModels: ["i20", "i10"]
    },
    {
        name: "toyota",
        model: "abc",
        old: 50,
        numberModels: ["i40", "i50"]
    }
]

// console.log(Object.values(carProperties))

// for (key in carProperties) {
//     console.log(carProperties[key])
// }


for(let i=0; i < carProperties.length; i++ ) {
    console.log(carProperties[i].old)
}


