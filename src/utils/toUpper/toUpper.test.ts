import toUpper from "./toUpper";


describe('toUpper', () => {
    it('Upper 1 letter in word', () => {
        expect(toUpper('word')).toEqual('Word')
    })
    it('Empty string', () => {
        expect(toUpper('')).toEqual('')
    })
    it('Is string', () => {
        const str = toUpper('word')
        expect(typeof str).toBe('string')
    })
})