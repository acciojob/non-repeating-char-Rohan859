function firstNonRepeatedChar(str) 
{
 // Write your code here
	let freq={};
	for(let ch of str)
	{
		//let index=ch-'a';
		if (freq[ch]) {
			freq[ch]++;
		} else {
			freq[ch]=1;
		}
	}

	for(let ch of str)
		{
			//let idx=ch-'a';
			if(freq[ch]==1)
			{
				return ch;
			}
		}
	return null;
}

const input = prompt("Enter a string");

alert(firstNonRepeatedChar(input)); 

