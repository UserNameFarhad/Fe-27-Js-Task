const isPolindrom = (str) => {
    let newStr = '';
       for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
       }
       return newStr === str;
    }

    console.log(isPolindrom('ana'));

// i = 3
//