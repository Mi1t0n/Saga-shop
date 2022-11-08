import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {getCategories} from "redux/slices/categoriesSlice/categoriesSlice";
import CategoryMiniBlock from "./CategoryMiniBlock/CategoryMiniBlock";
import MainWrapper from "../styled/MainWrapper";
import {BarLoader} from "react-spinners";
import Error from "../styled/Error";


const Catalog = () => {
    const dispatch = useAppDispatch()
    const {categories, loading, error} = useAppSelector(state => state.categories)

    useEffect(() => {
        if (!categories.length) dispatch(getCategories())
    }, []);

    if (loading) return <BarLoader cssOverride={{margin:'10px 0 '}} height={5} width={'100%'}/>
    if (error) return <Error>Error : {error}</Error>
    if (!categories.length) return <div>Cant load</div>

    return (
        <MainWrapper>
            {
                categories.map(category => <CategoryMiniBlock {...category} key={category.id}/>)
            }
        </MainWrapper>
    );
}

export default Catalog;
