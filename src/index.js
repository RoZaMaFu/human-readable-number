module.exports = function toReadable (number) {
    let tillTwenty = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    let tens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    if(tillTwenty.hasOwnProperty(number)){
        return tillTwenty[number]
    }
    if(tens.hasOwnProperty(number)){
        return tens[number]
    }
    let result = []
    for(let i = 10; i <= number * 10; i *= 10){
        result.push(((number % i) - (number % (i/10))))
    }
    if(result.length === 2){
        result[0] = tillTwenty[result[0]]
        result[1] = tens[result[1]]
    }
    else {
        if(result[0]){
            result[0] = tillTwenty[result[0]]
        }
        if(result[1]){
            result[1] = tens[result[1]]
        }
        result[2] = tillTwenty[result[2]/100] + ' hundred'
    }
    result = result.filter(e => e)
    return result.reverse().join(' ')
}
