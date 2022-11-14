import factorySelector from "./factory";

export const categoriesSelector = factorySelector(state => state.categories)