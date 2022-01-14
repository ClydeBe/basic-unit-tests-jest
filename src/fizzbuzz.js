function fizzBuzz(n) {
    // TODO: Compléter fizzbuzz()
    if (n % 5 === 0 && n % 3 === 0) return "fizzbuzz"
    if (n % 3 === 0) return "fizz"
    if (n % 5 === 0) return "buzz"
    return null;
}

module.exports = fizzBuzz
