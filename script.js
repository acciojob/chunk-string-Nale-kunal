function stringChop(str, size) {
  if (str == null || str.length === 0) return [];     // avoid TypeError for null
  size = Number(size);
  if (!Number.isInteger(size) || size <= 0) return []; // validate size

  let ans = [];
  let arr = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (count === size) {
      ans.push(arr);
      count = 0;
      arr = "";
    }
    arr += str[i];
    count++;
  }
  if (arr.length > 0) ans.push(arr);
  return ans;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
