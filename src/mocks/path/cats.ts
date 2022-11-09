import randomID from "../../utils/randomID/randomID";
import {faker} from "@faker-js/faker";
import {IProduct, priceColors} from "../../components/Category/Product/IProduct";

const cats: IProduct[] = []

for (let i = 0; i < 100; i++) {
    cats.push({
        id           : randomID(),
        title        : faker.lorem.word(),
        remained     : Number(faker.random.numeric(1)),
        image        : faker.image.cats(320, 220, true),
        bgColor      : priceColors.Red,
        averageWeight: faker.random.numeric(3),
        price        : faker.random.numeric(2)
    })
}

export default cats