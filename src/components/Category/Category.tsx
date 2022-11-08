import {useParams} from "react-router-dom";
import MainWrapper from "../styled/MainWrapper";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {getSubValues} from "redux/slices/categoriesSlice/categoriesSlice";
import Product from "./Product/Product";
import {BarLoader} from "react-spinners";
import Error from "../styled/Error";
import Pagination from "../Buttons/Pagination/Pagination";

const Category = () => {
    const {type} = useParams<string>()
    const {subValues, loading, error} = useAppSelector(state => state.categories)
    const dispatch = useAppDispatch()
    const [page, changePage] = useState<number>(1)

    useEffect(() => {
        if (type) dispatch(getSubValues({type, page, limit: 8}))
    }, [type, page]);

    if (loading) return <BarLoader cssOverride={{margin: '10px 0 '}} height={5} width={'100%'}/>
    if (error) return <Error>Error : {error}</Error>
    if (!subValues.length) return <div>Cant load</div>

    return (
        <>
            <MainWrapper>
                {
                    subValues.map(product => <Product {...product} key={product.id}/>)
                }
            </MainWrapper>
            <Pagination page={page}
                        next={() => subValues.length === 8 && changePage(page + 1)}
                        prev={() => page > 1 && changePage(page - 1)}
            />
        </>
    );
}

export default Category;
