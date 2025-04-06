import fs from 'node:fs'
import path from 'node:path'

export function readLines(day: number): string[] {
    const fileName = path.resolve(__dirname, `./${day}.txt`)
    const fileContent = fs.readFileSync(fileName, 'utf-8')
    return fileContent.split('\n')
}