import categories from "./path/categories";
import food from "./path/food";
import city from "./path/city";
import cats from "./path/cats";
import abstract from "./path/abstract";
import {rest} from "msw";

export const endpoints = [
    rest.get('/categories', (req, res, ctx) =>
        res(
            ctx.delay(1000),
            ctx.json(categories)
        )
    ),
    rest.get('/food', (req, res, ctx) => {
        const page = Number(req.url.searchParams.get('page'))
        const limit = Number(req.url.searchParams.get('limit'))
        if (page && limit) {
            return res(
                ctx.delay(1000),
                ctx.json(food.slice((page - 1) * limit, page * limit))
            )
        }
        if (limit) {
            return res(
                ctx.delay(1000),
                ctx.json(food.slice(0, limit))
            )
        }
        return res(
            ctx.delay(1000),
            ctx.json(food)
        )
    }),
    rest.get('/city', (req, res, ctx) => {
        const page = Number(req.url.searchParams.get('page'))
        const limit = Number(req.url.searchParams.get('limit'))
        if (page && limit) {
            return res(
                ctx.delay(1000),
                ctx.json(city.slice((page - 1) * limit, page * limit))
            )
        }
        if (limit) {
            return res(
                ctx.delay(1000),
                ctx.json(city.slice(0, limit))
            )
        }
        return res(
            ctx.delay(1000),
            ctx.json(city)
        )
    }),
    rest.get('/cats', (req, res, ctx) => {
        const page = Number(req.url.searchParams.get('page'))
        const limit = Number(req.url.searchParams.get('limit'))
        if (page && limit) {
            return res(
                ctx.delay(1000),
                ctx.json(cats.slice((page - 1) * limit, page * limit))
            )
        }
        if (limit) {
            return res(
                ctx.delay(1000),
                ctx.json(cats.slice(0, limit))
            )
        }
        return res(
            ctx.delay(1000),
            ctx.json(cats)
        )
    }),
    rest.get('/abstract', (req, res, ctx) => {
        const page = Number(req.url.searchParams.get('page'))
        const limit = Number(req.url.searchParams.get('limit'))
        if (page && limit) {
            return res(
                ctx.delay(1000),
                ctx.json(abstract.slice((page - 1) * limit, page * limit))
            )
        }
        if (limit) {
            return res(
                ctx.delay(1000),
                ctx.json(abstract.slice(0, limit))
            )
        }

        return res(
            ctx.delay(1000),
            ctx.json(abstract)
        )
    }),
    rest.post('/orders', (req, res, ctx) => {
            req.text().then(body => console.log(JSON.parse(body)))
            return res(
                ctx.delay(2000),
                ctx.status(200)
            )
        }
    )

]