function firstNonRepeatedChar(str) 
{
 // Write your code here
	let freq[]=[];
	for(let ch of str)
	{
		let index=ch-'a';
		freq[index]++;
	}

	for(let ch of str)
		{
			let idx=ch-'a';
			if(freq[idx]==1)
			{
				return ch;
			}
		}
	return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

