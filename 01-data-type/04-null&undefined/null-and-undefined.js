// tipo null e undefined

let input = null;

if (input === null) {
    console.log('não há informação');
} else {
    console.log(input);
}

// os dois tipos tem o mesmo valor mas são coisas diferentes

console.log(null == undefined); // true
console.log(null === undefined); // false