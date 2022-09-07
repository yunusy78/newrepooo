let value;

const numbers=[56,33,23,35,5];
const numbers_2=new Array(1,2,3,4,5,6);
const langs=["Python", "Java", "C++", "Jvascript"];
const a=["Hello", 22, null, undefined,3.14];


//uzunluk
value=numbers.length;
console.log(value);


//indeksleme
value=numbers[0];
console.log(value);

value=numbers[2];
console.log(value);

value=numbers[numbers.length-1];
console.log(value);


//Herhangi bir indeksteki degeri degistirme

numbers[2]=1000;
value=numbers;
console.log(value);

//!000 sayisinin bulundugu index
value=numbers.indexOf(1000);
console.log(value);

//Arrayin sonuna deger ekleme

numbers.push(2000);
value=numbers;
console.log(value);

//Basina deger ekleme

numbers.unshift(3000);
value=numbers;
console.log(value);

// //Sonundan deger atma

// numbers.pop();
// value=numbers;
// console.log(value);

// //Basindan deger atma

// numbers.shift();
// value=numbers;
// console.log(value);


// //Belirli bir indexten belirli bir indekse kadar atma

// numbers.splice(0,3);
// value=numbers;
// console.log(value);


// numbers.reverse();
// value=numbers;
// console.log(value);


//Siralama
value=numbers.sort();
console.log(value);



value=numbers.sort(function(x,y){
    return x-y
});

console.log(value);

value=numbers.sort(function(x,y){
    return y-x
});

console.log(value);