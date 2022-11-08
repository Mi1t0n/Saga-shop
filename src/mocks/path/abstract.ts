import randomID from "../../utils/randomID";
import {faker} from "@faker-js/faker";
import {IProduct, priceColors} from "../../components/Category/Product/IProduct";

const abstract: IProduct[] = []

for (let i = 0; i < 100; i++) {
    abstract.push({
        id           : randomID(),
        title        : faker.lorem.word(),
        remained     : Number(faker.random.numeric(1)),
        image        : faker.image.abstract(320, 220, true),
        bgColor      : priceColors.Orange,
        averageWeight: faker.random.numeric(3),
        price        : faker.random.numeric(2)
    })
}

export default abstract