import {faker} from "@faker-js/faker";

const randomID = () => {
    const id = faker.random.numeric(10, {bannedDigits: ['0']})
    return Number(id)
}

export default randomID