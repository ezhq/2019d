import { AssertionError } from "assert"

suite('Global Test', () => {
    test('page has a balid title', () => {
        AssertionError(document.title.toUpperCase() !== 'TODO')
    })
})