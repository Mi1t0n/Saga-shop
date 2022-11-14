import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {getCategories} from "redux/slices/categoriesSlice/categoriesSlice";
import CategoryMiniBlock from "./CategoryMiniBlock/CategoryMiniBlock";
import MainWrapper from "../styled/MainWrapper";
import Error from "../styled/Error";
import Loader from "../styled/Loader";
import {categoriesSelector} from "selecors/categoriesSelectors";


const Catalog = () => {
    const dispatch = useAppDispatch()
    const {categories, loading, error} = useAppSelector(categoriesSelector)

    useEffect(() => {
        if (!categories.length) dispatch(getCategories())
    }, []);

    if (loading) return <Loader/>
    if (error) return <Error>Error : {error}</Error>
    if (!categories.length) return <div>Cant load</div>

    return (
        <MainWrapper>
            {
                categories.map(category => <CategoryMiniBlock {...category} key={category.title}/>)
            }
        </MainWrapper>
    );
}

export default Catalog;
