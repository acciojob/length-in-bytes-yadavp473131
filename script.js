const byteSize = (str) => {
  // write your code here
	let ans = new Blob([str]).size;
	return ans;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
