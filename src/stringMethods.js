str = "SharierIslam"
strN = "My Name is "
wStr = "   Sharier   js "
newStr = str.toUpperCase();
newStr1 = str.toLowerCase();
console.log(str);

console.log(str.toUpperCase());
console.log(newStr);

console.log(newStr1);

console.log(wStr.trim()); // remove white space

console.log(str.slice(0,4)); // Make a slice

console.log(strN.concat(str)); // concatnation is like join two differnt string


let replace = str.replace("SharierIslam", "Sharier"); // str.replace(searchVal, newVal) also have str.replaceAll(searchVal, newVal)
console.log(replace);


console.log(str.charAt(2));