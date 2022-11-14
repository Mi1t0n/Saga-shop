import {CategoriesWorker, subValueWorker} from "./categoriesWorker";
import {call, put} from "redux-saga/effects";
import {requestCategories, requestSubValues} from "./categoriesRequest";
import {setCategories, setError, setSubValues} from "../../slices/categoriesSlice/categoriesSlice";
import {priceColors} from "../../../components/styled/Price";

jest.mock("redux/sagas/categories/categoriesRequest");

describe('CategoriesWorker', () => {

    it('should get data and put in store', async () => {
        const mockedCategories = [
            {
                img  : '2',
                title: 'Food'
            },
            {
                img  : '1',
                title: 'Abstract'
            }
        ]

        const generator = CategoriesWorker()

        const request = await generator.next().value
        expect(request).toEqual(call(requestCategories))

        const data = generator.next(mockedCategories).value
        expect(data).toEqual(put(setCategories(mockedCategories)))
    })
})

describe('subValueWorker', () => {
    it('should get data and put in store', () => {
        const mockedSubValues = [
            {
                id           : 1,
                title        : 'lorem',
                remained     : 1,
                image        : '54321',
                bgColor      : priceColors.Red,
                averageWeight: '1',
                price        : '1'
            },
            {
                id           : 2,
                title        : 'lorem2',
                remained     : 2,
                image        : '12345',
                bgColor      : priceColors.Yellow,
                averageWeight: '2',
                price        : '2'
            }
        ]
        const action = {type: '', payload: {type: 'food'}}
        const generator = subValueWorker(action)

        const request = generator.next().value
        expect(request).toEqual(call(requestSubValues, 'food', undefined, undefined))

        const data = generator.next(mockedSubValues).value
        expect(data).toEqual(put(setSubValues(mockedSubValues)))
    })
    it('should handle error', async () => {

        const action = {type: '', payload: {type: '1'}}
        const generator = subValueWorker(action)
        const request = generator.next().value
        expect(request).toEqual(call(requestSubValues, '1', undefined, undefined))

        const error = generator.throw('TESTERROR').value
        expect(error).toEqual(put(setError('TESTERROR')))
    })

})