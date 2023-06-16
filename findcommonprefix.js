const arr = ["foot", "fooo", "foos"]
const arr1 = ["fooo", "fooo", "fooo"]
const arr2 = ["foto", "fooo", "fooo"]
function common(arr) {
    if(arr.length === 0) {return ''}
    const fWord = arr[0];
    let cWord = '';
    for(let i=0;i<fWord.length;i++) {
        const char=fWord[i];
        for(let j=1;j<arr.length;j++) {
            if(arr[j][i]!==char) {
                return cWord;
            }
        }
        cWord+=char;
    }
    return cWord;
}
console.log(common(arr));
console.log(common(arr1));
console.log(common(arr2));








