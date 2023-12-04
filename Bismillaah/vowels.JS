"use strict"
/*

let arr = ["DEL", "HYD"];

console.log(arr);
console.log(arr.length);

arr.push("MAA");

console.log(arr);
console.log(arr.length);

arr.pop("MAA");

console.log(arr);
console.log(arr.length);

arr.unshift("BLR");

console.log(arr);
console.log(arr.length);

*/


/*

let arr = ["Eng", "Kan", "Hin", ['a', ['e', 'i'], ['o', 'u']]];
console.log(arr);
console.log(arr.flat(Infinity));
console.log(...arr, ...arr);
let M1 = arr.flatMap;
console.log(M1);


*/



let str = "Alif_Laam_Meem_"
console.log("Length: ",str.length);

let count = 0
let voCount = (str, count) =>
                {   
                    for(let i=0; i<5; i++)
                    {
                        console.log(str[i]+count);
                        /*
                        if(str[i] == 'a' ||
                           str[i] == 'e' ||
                           str[i] == 'i' ||
                           str[i] == 'o' ||
                           str[i] == 'u')
                        */   
                        count++;
                    }
                    console.log(`Vowels Count: ${count}`);
                }

voCount(str, count);


let Arr = ["One", "Two", "Thr", "Four", "Five"]
let str1 = Arr.toString();
console.log(str1);


Arr.forEach(voCount(Arr, count));