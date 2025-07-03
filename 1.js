function isAValidMessage(message) {
    if (message === undefined || message === null) return false;
    if (message === "") return true;

    let i = 0;
    const n = message.length;

    while (i < n) {
        let numStr = '';

        while (i < n && !isNaN(message[i])) {
            numStr += message[i];
            i++;
        }

        if (numStr === '' || i >= n) {
            return false;
        }

        const num = parseInt(numStr, 10);
        let lettersCount = 0;

        while (i < n && isNaN(message[i])) {
            lettersCount++;
            i++;
        }

        if (lettersCount !== num) {
            return false;
        }
    }

    return true;
}

console.log(isAValidMessage("3hey5hello2hi")); 
console.log(isAValidMessage("hello5"));
console.log(isAValidMessage());
console.log(isAValidMessage("3hey5hello2hi")); 