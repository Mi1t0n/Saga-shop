import randomID from "../../utils/randomID";
import {faker} from "@faker-js/faker";
import {ICategoryMiniBlock} from "components/Catalog/CategoryMiniBlock/ICategoryMiniBlock";

const categories: ICategoryMiniBlock[] = [
    {
        id   : randomID(),
        img  : faker.image.food(320, 220, true),
        title: 'Food'
    },
    {
        id   : randomID(),
        img  : faker.image.abstract(320, 220, true),
        title: 'Abstract'
    },

    {
        id   : randomID(),
        img  : faker.image.cats(320, 220, true),
        title: 'Cats'
    },
    {
        id   : randomID(),
        img  : faker.image.city(320, 220, true),
        title: 'City'
    }
]


export default categories