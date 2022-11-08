import {faker} from "@faker-js/faker";

const randomID = () => Number(faker.random.numeric(10))

export default randomID