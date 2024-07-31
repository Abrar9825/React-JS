const name = "a";
const id = 101;

// shorthand property just giveing a varibel
const obj = {
    id,
    name
}
console.log(obj);

const obj2 = {
    plan: "All Time",
    id,
    name
}

const { plan } = obj2

console.log(plan);


let array = [1, 2, 3]
// let arrayfirstElement = array[0]
// let arraySecondElement = array[1]
// let arraythirdElement = array[2]


// insted of 
const [arrayfirstElement, arraySecondElement, arraythirdElement] = array
console.log(arrayfirstElement, arraySecondElement, arraythirdElement);


// sperad
const ar2 = [2, 3, 4]
const ar3 = [12, 13, 14]

console.log([6000, ...ar2, 7000, ...ar3, 2000]);



function name1(a, b, ...c) {
    console.log(a, b, c);
}

name1(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 2, 3, 4, 5)
