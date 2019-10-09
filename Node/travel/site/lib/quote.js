/******** 内部函数 ********/
let quotes = [
    'Alice line.',
    'Bob line.',
    'Charry line.',
    'Docker line.',
]

/******** 对外 ********/
exports.getQuote = function() {
    let quoteIndex = Math.floor(Math.random() * quotes.length)
    return quotes[quoteIndex]
}