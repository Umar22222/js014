console.log("START");


{
    // 30 - misol
    // function reverseNumber(num) {
    //     return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
    // }
    
    // console.log(reverseNumber(12345)); // Output: 54321
    
}

{
    // 31 - misol
    // function arrayToLengthObject(arr) {
    //     let obj = {};
    //     arr.forEach(item => {
    //         obj[item] = item.length;
    //     });
    //     return obj;
    // }
    
    // console.log(arrayToLengthObject(["text", "world", "laptop"])); 
    
    
}

{
    // 32 - misol
    // function minMaxWord(sentence) {
    //     let words = sentence.split(' ');
    //     let minWord = words[0], maxWord = words[0];
    
    //     words.forEach(word => {
    //         if (word.length < minWord.length) minWord = word;
    //         if (word.length > maxWord.length) maxWord = word;
    //     });
    
    //     return { minWord, maxWord };
    // }
    
    // console.log(minMaxWord("Men dasturlash kursida o'qiyman"));
    
    
}

{
    // 33 - misol
    // function getLevel(n) {
    //     let result = [];
    //     for (let i = 1; i <= n; i++) {
    //         result.push(Math.pow(2, i));
    //     }
    //     return result;
    // }
    
    // console.log(getLevel(4)); 
    // console.log(getLevel(5)); 
    
}

{
    // 34 - misol
    // function shortestWord(sentence) {
    //     let words = sentence.split(' ');
    //     let shortest = words.reduce((min, word) => word.length < min.length ? word : min, words[0]);
    //     return shortest;
    // }
    
    // console.log(shortestWord("This is an example sentence"));
    
    
}

{
    // 35 - misol
    // function removeDuplicates(obj) {
    //     let uniqueValues = [...new Set(Object.values(obj))];
    //     let result = {};
    //     Object.keys(obj).forEach((key, index) => {
    //         result[key] = uniqueValues[index];
    //     });
    //     return result;
    // }
    
    // const obj = { a: 2, b: 3, c: 4, d: 2, e: 4 };
    // console.log(removeDuplicates(obj));
  
    
}

{
    // 36 - misol
    // function countCharOccurrences(str) {
    //     let charCount = {};
    //     str.split('').forEach(char => {
    //         charCount[char] = (charCount[char] || 0) + 1;
    //     });
    //     return charCount;
    // }
    
    // console.log(countCharOccurrences("hello world"));

    
}

{
    // 37 - misol
//     const sumOfIndices = (arr, indices) => indices.reduce((sum, index) => sum + arr[index], 0);

// console.log(sumOfIndices([1, 22, 3], [0, 2])); 


}

{
    // 38 - misol
    // function countWordsWithLetter(str, letter) {
    //     let words = str.split(' ');
    //     let count = 0;
    //     words.forEach(word => {
    //         if (word.includes(letter)) count++;
    //     });
    //     return count;
    // }
    
    // console.log(countWordsWithLetter("Hello world this is a test", "t"));
    
}

{
    // 39 - misol
    // function powerOfTwoInN(k, n) {
    //     return Math.floor(n / Math.pow(2, k));
    // }
    
    // console.log(powerOfTwoInN(3, 8)); 
    
    
}

{
    // 40 - misol
    // function findMiddleNumber(arr) {
    //     let middleIndex = Math.floor(arr.length / 2);
    //     if (arr.length % 2 === 0) {
    //         return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    //     } else {
    //         return arr[middleIndex];
    //     }
    // }
    
    // console.log(findMiddleNumber([1, 2, 3, 4])); 
    
    // console.log(findMiddleNumber([1, 2, 3]));   
    
    
}


{
    // 41 - misol
    // const books = [
    //     { title: "Halqa", author: "Akrom Malik", read: false },
    //     { title: "Dunyoning ishlari", author: "O'tkir Hoshimov", read: true },
    //     { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true }
    // ];
    
    // function checkBooksReadStatus(books) {
    //     books.forEach((book, index) => {
    //         if (book.read) {
    //             console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi o'qilgan`);
    //         } else {
    //             console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi o'qilmagan`);
    //         }
    //     });
    // }
    
    // checkBooksReadStatus(books);

    
}

{
    // 42 - misol
    // function arrayToLengthObject(arr) {
    //     let obj = {};
    //     arr.forEach(item => {
    //         obj[item] = item.length;
    //     });
    //     return obj;
    // }
    
    // console.log(arrayToLengthObject(["text", "world", "laptop"])); 

    
}

{
    // 43 - misol
    // function multiplyObjectValues(obj, n) {
    //     let result = {};
    //     for (let key in obj) {
    //         result[key] = obj[key] * n;
    //     }
    //     return result;
    // }
    
    // const obj = { a: 2, b: 3, c: 4 };
    // console.log(multiplyObjectValues(obj, 3));
    
    
}

{
    // 44 - misol
    // function getLevel(n) {
    //     let result = [];
    //     for (let i = 1; i <= n; i++) {
    //         result.push(Math.pow(2, i));
    //     }
    //     return result;
    // }
    
    // console.log(getLevel(4));
    // console.log(getLevel(5));
    
}

{
    // 45 - misol
    // function countWords(arr) {
    //     let counts = {};
    //     arr.forEach(word => {
    //         counts[word] = (counts[word] || 0) + 1;
    //     });
    //     return counts;
    // }
    
    // const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    // console.log(countWords(animals));
    
    
}


{
    // 46 - misol
    // function squareArray(arr) {
    //     return arr.map(num => num * num);
    // }
    
    // console.log(squareArray([1, 2, 3, 4]));
    
    
}

{
    // 47 -misol
    // function sumPositiveNumbers(arr) {
    //     return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
    // }
    
    // console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150]));
    
    
}

{
    // 48 - misol
    // function getInitials(str) {
    //     return str.split(' ').map(word => word[0]).join('');
    // }
    
    // console.log(getInitials("George Raymond Richard Martin"));
    
    
}

{
    // 49 - misol
    // function ageDifference(people) {
    //     people.sort((a, b) => a.age - b.age);
    //     const youngest = people[0].age;
    //     const oldest = people[people.length - 1].age;
    //     return oldest - youngest;
    // }
    
    // const people = [
    //     { name: "John", age: 13 },
    //     { name: "Mark", age: 56 },
    //     { name: "Rachel", age: 45 },
    //     { name: "Nate", age: 67 },
    //     { name: "Jeniffer", age: 65 }
    // ];
    
    // console.log(ageDifference(people));
    
    
}

{
    // 50 - misol
    // function singleNumber(nums) {
    //     let map = new Map();
        
 
    //     nums.forEach(num => {
    //         map.set(num, (map.get(num) || 0) + 1);
    //     });
        

    //     return [...map.keys()].filter(key => map.get(key) === 1);
    // }
    
    // console.log(singleNumber([4, 1, 2, 1, 2, 9, true]));
    
}


{
    // 51 - misol
    // function middleNumber(arr) {
    //     const n = arr.length;
    //     if (n % 2 === 1) {
         
    //         return arr[Math.floor(n / 2)];
    //     } else {
         
    //         const mid1 = arr[Math.floor(n / 2) - 1];
    //         const mid2 = arr[Math.floor(n / 2)];
    //         return (mid1 + mid2) / 2;
    //     }
    // }
    
    // console.log(middleNumber([1, 2, 3, 4, 5]));
    // console.log(middleNumber([1, 2, 3, 4]));
    
}















console.log("END");
