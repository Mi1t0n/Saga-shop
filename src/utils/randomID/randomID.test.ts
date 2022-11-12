import randomID from "./randomID";
import {faker} from "@faker-js/faker";

describe('randomID', () => {
    it('id not undefined', () => {
        const id = randomID()
        expect(id).not.toBeUndefined()
        expect(typeof id).not.toBeNaN()
    })
    it('Faker called', () => {
        const spyFaker = jest.spyOn(faker.random, 'numeric')
        const id = randomID()
        expect(spyFaker).toBeCalled()
        expect(typeof id).not.toBeNaN()
    })
    it('Returns number', () => {
        const id = randomID()
        expect(typeof id).toBe('number')
        expect(typeof id).not.toBeNaN()
    })

})