import randomID from "./randomID";
import {faker} from "@faker-js/faker";

describe('randomID', () => {
    it('id not undefined', () => {
        expect(randomID()).not.toBeUndefined()
    })
    it('Faker called', () => {
        const spyFaker = jest.spyOn(faker.random, 'numeric')
        randomID()
        expect(spyFaker).toBeCalled()
    })
    it('Returns number', () => {
        const id = randomID()
        expect(typeof id).toBe('number')
    })
    it('Length is 10', () => {
        const id = randomID()
        expect(id.toString().length).toBe(10)
    })
})