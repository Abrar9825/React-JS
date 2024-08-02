const per1 = [
    {
        name: "a",
        age: 56
    },
    {
        name: "b",
        age: 23
    },
    {
        name: "c",
        age: 76
    },
    {
        name: "d",
        age: 76
    },
]
// map Note: to map and get something 
let getName = per1.map((onlyName, index) => {
    return onlyName.name
})
console.log(`${getName} Mapping the only name`);

// find Note:only give 1 index of ocuurence
let letSameAge = per1.find((data, index) => {
    return data.age === 76
})
console.log(`${letSameAge} using find to get first occurence`);

// filter Note:give all matching Result
let letSameAgeFilter = per1.filter((data, index) => {
    return data.age === 76
})
console.log(`${letSameAgeFilter} filter give all same occurence`);

// some Note: return a Boolean Value

let someExample = per1.some((data, index) => {
    return data.age > 50
})
console.log(`${someExample} : return Only Boolean`);


// every Note:check every value in array if any is less then 20 give me false o
let everyExample = per1.every((data, index) => {
    return data.age > 20
})
console.log(`${everyExample} check  every value in array `);


// include Notes : check object are in there or not
const color = ['red', 'yellow']
console.log(`${color.includes("red")} : using a include`);
console.log(`${color.indexOf("red")} : using indexOf`);//-1 mean dose't exsit

// findIndex
let findIndexExample = per1.findIndex((data, index) => {
    return data.age === 76
})

console.log(`${findIndexExample} : give the count of data`);


// const apitest = document.querySelector('.api');

function renderproduct(get) {
    apitest.innerHTML = get.map(data => {
        return `<p>${data.title}</p>`;
    }).join('');
}

async function fetchApi() {
    try {
        const resp = await fetch('//dummyjson.com/test', {
            method: 'GET'
        });
        const result = await resp.json();

        console.log(result);
        if (result?.products?.length > 0) {
            renderproduct(result.products);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchApi();
