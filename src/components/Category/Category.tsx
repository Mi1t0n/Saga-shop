import {useParams} from "react-router-dom";
import MainWrapper from "../styled/MainWrapper";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {getSubValues} from "redux/slices/categoriesSlice/categoriesSlice";
import Product from "./Product/Product";
import Error from "../styled/Error";
import Pagination from "../Buttons/Pagination/Pagination";
import Loader from "../styled/Loader";

const Category = () => {
    const {type} = useParams<string>()
    const {subValues, loading, error} = useAppSelector(state => state.categories)
    const dispatch = useAppDispatch()

    const getPage = (page: number) => type && dispatch(getSubValues({type, page, limit: 8}))

    if (error) return <Error>Error : {error}</Error>

    return (
        <>
            {
                loading ?
                    <Loader/>
                    :
                    <MainWrapper>
                        {
                            subValues.map(product => <Product {...product} key={product.id}/>)
                        }
                    </MainWrapper>
            }
            <Pagination getPage={getPage} maxPage={100 / 8}/>
        </>
    );
}

export default Category;
