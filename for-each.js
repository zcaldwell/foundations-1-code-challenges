// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/


export function makeArrayOfNames(arr) {
    
    const names = [];
    arr.forEach(item => names.push(item.name)); 
        
    return names;
}
    

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const typeArr = [];
    arr.forEach(element => {
        typeArr.push(element.type);
        typeArr.reverse();
    });
    return typeArr;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishArr = [];
    arr.forEach(element => {
        spanishArr.push({ nombre: element.name, tipo: element.type });
        
    });
    return spanishArr;

}



