function findUniqueChars(str) {
    // Use a Set to efficiently store unique characters
    const uniqueChars = new Set(str.split(''));
    return [...uniqueChars].join(''); // Convert set back to a string
  }
  
  const testString = "thequickbrownfoxjumpsoverthelazydog";
  const unique = findUniqueChars(testString);
  console.log(unique); // Output: theqbkfmpsxyz