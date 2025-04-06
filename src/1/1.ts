import {readLines} from "../index";

function calibrate(doc: string[]) : number {
    const values = doc.map((line) => {
        let firstDigit: number  = 0;
        let lastDigit: number = 0;
        for (let i = 0; i < line.length; i++) {
            if (!Number.isNaN(Number(line[i]))) {
                firstDigit = Number(line[i])
                break
            }
        }
        for (let j = line.length - 1; j>= 0; j--) {
            if (!Number.isNaN(Number(line[j]))) {
                lastDigit = Number(line[j])
                break
            }
        }
        return firstDigit * 10 + lastDigit
    })
    return values.reduce((acc, i) => acc + i, 0)
}

console.log(calibrate(readLines(1)))



const digits = new Map<string, number>([
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9],
    ['zero', 0],
]);

const digitsKeys = Array.from(digits.keys())

function getKey(str: string, pos: number) {
    return digitsKeys.find((key: string) => str.slice(pos, pos + 5).startsWith(key))
}

function calibrate2(doc: string[]) : number {
    const values = doc.map((line) => {
        let firstDigit: number  = 0
        let lastDigit: number = 0
        for (let i = 0; i < line.length; i++) {
            if (!Number.isNaN(Number(line[i]))) {
                firstDigit = Number(line[i])
                break
            }
            if (getKey(line, i)) {
                firstDigit = digits.get(getKey(line, i)!)!
                break
            }
        }
        for (let j = line.length - 1; j>= 0; j--) {
            if (!Number.isNaN(Number(line[j]))) {
                lastDigit = Number(line[j])
                break
            }
            if (getKey(line, j)) {
                lastDigit = digits.get(getKey(line, j)!)!
                break
            }
        }
        return firstDigit * 10 + lastDigit
    })
    return values.reduce((acc, i) => acc + i, 0)
}

console.log(calibrate2(readLines(1)))
