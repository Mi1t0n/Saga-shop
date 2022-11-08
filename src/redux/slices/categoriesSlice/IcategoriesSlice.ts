import {ICategoryMiniBlock} from "components/Catalog/CategoryMiniBlock/ICategoryMiniBlock";
import {IProduct} from "components/Category/Product/IProduct";

interface Ipagination {
    type: string,
    page?: number,
    limit?: number
}

interface IcategoriesSlice {
    loading: boolean,
    error: string,
    categories: ICategoryMiniBlock[],
    subValues: IProduct[]
}

export type {IcategoriesSlice,Ipagination}