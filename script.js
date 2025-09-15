function stringChop(str, size) {
  // your code here
	size= Number(size);
	if(str.length==0) return [];
	let ans=[];
	let arr="";
	let count=0;
	for(let i=0;i<str.length;i++){
		if(count==size){
			ans.push(arr);
			count=0;
			arr="";
		}
		
		arr+=str[i];
		count++;
	}
	if (arr.length > 0) ans.push(arr);
	return ans;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
