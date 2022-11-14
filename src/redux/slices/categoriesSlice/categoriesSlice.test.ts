import reducer, {getCategories, getSubValues, setCategories, setError, setSubValues} from "./categoriesSlice";
import {IcategoriesSlice} from "./IcategoriesSlice";
import {priceColors} from "components/styled/Price";

describe('categoriesSlice reducers', () => {
    let mockedState: IcategoriesSlice

    beforeEach(() => {
        mockedState = {
            loading   : false,
            error     : '',
            categories: [],
            subValues : []
        }
    })
    it('should return the state', () => {
        const stateAfterCall = reducer(mockedState, {type: 'undefined'})
        expect(stateAfterCall).toEqual(mockedState)
    })
    it('should start getting categories', () => {
        const stateAfterCall = reducer(mockedState, getCategories())
        mockedState.loading = true

        expect(stateAfterCall).toEqual(mockedState)
    })
    it('should start setting categories', () => {
        const mockedCategory = {
            id   : 111111,
            img  : '12345',
            title: 'Food'
        }
        const stateAfterCall = reducer(mockedState, setCategories([mockedCategory]))
        mockedState.loading = false
        mockedState.categories = [mockedCategory]

        expect(stateAfterCall).toEqual(mockedState)
    })

    it('should start getting sub values', () => {
        const stateAfterCall = reducer(mockedState, getSubValues({type: 'food'}))
        mockedState.loading = true

        expect(stateAfterCall).toEqual(mockedState)
    })
    it('should start setting sub values', () => {
        const mockedSubValue = {
            id           : 1111111111,
            title        : 'lorem',
            remained     : 111,
            image        : '54321',
            bgColor      : priceColors.Red,
            averageWeight: '111',
            price        : '1111'
        }
        const stateAfterCall = reducer(mockedState, setSubValues([mockedSubValue]))
        mockedState.loading = false
        mockedState.subValues = [mockedSubValue]

        expect(stateAfterCall).toEqual(mockedState)
    })
    it('should start getting error', () => {
        const stateAfterCall = reducer(mockedState, setError('error'))
        mockedState.error = 'error'

        expect(stateAfterCall).toEqual(mockedState)
    })
})
