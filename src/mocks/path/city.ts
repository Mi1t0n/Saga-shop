import randomID from "../../utils/randomID";
import {faker} from "@faker-js/faker";
import {IProduct, priceColors} from "../../components/Category/Product/IProduct";

const city: IProduct[] = []

for (let i = 0; i < 100; i++) {
    city.push({
        id           : randomID(),
        title        : faker.lorem.word(),
        remained     : Number(faker.random.numeric(1)),
        image        : faker.image.city(320, 220, true),
        bgColor      : priceColors.Blue,
        averageWeight: faker.random.numeric(3),
        price        : faker.random.numeric(2)
    })
}

export default city