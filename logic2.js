function findCommonPrefix(arr) {
    if (arr.length === 0) {
      return "";
    }  
    return arr.reduce((prefix, word) => {
      while (!word.startsWith(prefix)) {
        prefix = prefix.slice(0, prefix.length - 1);
      }
      return prefix;
    });
  }
  const arr = ["foot", "fooo", "foos"]
  const arr2 = ["foto", "fooo", "fooo"]

  console.log(findCommonPrefix(arr2));