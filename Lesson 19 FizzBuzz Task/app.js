let a = +prompt('Enter a Number');

if (a % 15 == 0) {
    document.write('FizzBuzz');
} else if (a % 3 == 0) {
    document.write ('Fizz');
} else if (a % 5 == 0) {
    document.write('Buzz');
} else { 
    document.write(a)
}