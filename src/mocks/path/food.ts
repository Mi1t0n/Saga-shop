import randomID from "../../utils/randomID/randomID";
import {faker} from "@faker-js/faker";
import {IProduct, priceColors} from "../../components/Category/Product/IProduct";

const food: IProduct[] = []

for (let i = 0; i < 100; i++) {
    food.push({
        id           : randomID(),
        title        : faker.lorem.word(),
        remained     : Number(faker.random.numeric(1)),
        image        : faker.image.food(320, 220, true),
        bgColor      : priceColors.Yellow,
        averageWeight: faker.random.numeric(3),
        price        : faker.random.numeric(2)
    })
}

export default food